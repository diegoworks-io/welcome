export function initFluidName() {
    const shell = document.getElementById('fluid-shell');
    const stage1 = shell.querySelector('.stage1');
    const stage2 = shell.querySelector('.stage2');
    const stage1HeroWrap = shell.querySelector('.stage1 .hero-wrap');
    const stage1Subtitle = shell.querySelector('.stage1 .subtitle');
    const stage1NameText = shell.querySelector('.stage1 .hero-text');
    const stage2LeftCol = shell.querySelector('.stage2 .left-col');
    const stage2RightCol = shell.querySelector('.stage2 .right-col');
    const tijuanaTimeEl = shell.querySelector('#tijuana-time');
    const layoutTabs = Array.from(shell.querySelectorAll('[data-layout-target]'));
    const layoutPanes = Array.from(shell.querySelectorAll('[data-layout-pane]'));
    const projectTabs = Array.from(shell.querySelectorAll('[data-project-target]'));
    const projectPanes = Array.from(shell.querySelectorAll('[data-project-pane]'));
    const tijuanaTimeZone = 'America/Tijuana';
    const AUTO_STAGE2_DELAY_MS = 3000;
    let autoStageTimer = null;

    function setLayoutPane(id) {
      layoutPanes.forEach((pane) => {
        pane.hidden = pane.dataset.layoutPane !== id;
      });

      layoutTabs.forEach((tab) => {
        const isActive = tab.dataset.layoutTarget === id;
        tab.classList.toggle('is-active', isActive);
        tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
    }

    layoutTabs.forEach((tab) => {
      tab.addEventListener('click', () => setLayoutPane(tab.dataset.layoutTarget));
    });

    setLayoutPane('a');

    function setProjectPane(id) {
      projectPanes.forEach((pane) => {
        pane.hidden = pane.dataset.projectPane !== id;
      });

      projectTabs.forEach((tab) => {
        const isActive = tab.dataset.projectTarget === id;
        tab.classList.toggle('node-card--active', isActive);
      });
    }

    projectTabs.forEach((tab) => {
      tab.addEventListener('click', () => setProjectPane(tab.dataset.projectTarget));
    });

    setProjectPane('konbi');

    function getTimeZoneOffsetMinutes(date, timeZone) {
      const dtf = new Intl.DateTimeFormat('en-US', {
        timeZone,
        hour12: false,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });

      const parts = dtf.formatToParts(date);
      const map = {};
      parts.forEach((part) => {
        if (part.type !== 'literal') map[part.type] = part.value;
      });

      const asUtc = Date.UTC(
        Number(map.year),
        Number(map.month) - 1,
        Number(map.day),
        Number(map.hour),
        Number(map.minute),
        Number(map.second)
      );

      return (asUtc - date.getTime()) / 60000;
    }

    function formatOffsetLabel(diffMinutes) {
      const roundedHours = Math.round(Math.abs(diffMinutes) / 60);
      if (roundedHours === 0) return 'same time as you';
      return diffMinutes > 0
        ? `${roundedHours}h ahead of you`
        : `${roundedHours}h behind you`;
    }

    function updateTijuanaTime() {
      if (!tijuanaTimeEl) return;
      const now = new Date();

      const localOffset = -now.getTimezoneOffset();
      const tijuanaOffset = getTimeZoneOffsetMinutes(now, tijuanaTimeZone);
      const diffMinutes = tijuanaOffset - localOffset;

      const timeLabel = new Intl.DateTimeFormat([], {
        timeZone: tijuanaTimeZone,
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }).format(now);

      tijuanaTimeEl.textContent = `${timeLabel} · ${formatOffsetLabel(diffMinutes)}`;
    }

    updateTijuanaTime();
    window.setInterval(updateTijuanaTime, 30000);

    function emitStage1Layout() {
      if (!shell || !stage1) return;
      const shellRect = shell.getBoundingClientRect();
      const rect = stage1.getBoundingClientRect();
      const heroRect = stage1HeroWrap ? stage1HeroWrap.getBoundingClientRect() : rect;
      const subtitleRect = stage1Subtitle ? stage1Subtitle.getBoundingClientRect() : rect;
      const nameRect = stage1NameText ? stage1NameText.getBoundingClientRect() : heroRect;
      const stage2LeftRect = stage2LeftCol ? stage2LeftCol.getBoundingClientRect() : rect;
      const stage2RightRect = stage2RightCol ? stage2RightCol.getBoundingClientRect() : rect;
      if (!shellRect.width || !shellRect.height) return;

      window.dispatchEvent(new CustomEvent('stage1:layout', {
        detail: {
          x: (rect.left - shellRect.left) / shellRect.width,
          y: (rect.top - shellRect.top) / shellRect.height,
          width: rect.width / shellRect.width,
          height: rect.height / shellRect.height,
          nameLeft: (nameRect.left - shellRect.left) / shellRect.width,
          nameRight: (nameRect.right - shellRect.left) / shellRect.width,
          nameTop: (nameRect.top - shellRect.top) / shellRect.height,
          nameBottom: (nameRect.bottom - shellRect.top) / shellRect.height,
          heroTop: (heroRect.top - shellRect.top) / shellRect.height,
          heroBottom: (heroRect.bottom - shellRect.top) / shellRect.height,
          subtitleLeft: (subtitleRect.left - shellRect.left) / shellRect.width,
          subtitleRight: (subtitleRect.right - shellRect.left) / shellRect.width,
          subtitleTop: (subtitleRect.top - shellRect.top) / shellRect.height,
          subtitleBottom: (subtitleRect.bottom - shellRect.top) / shellRect.height
        }
      }));

      window.dispatchEvent(new CustomEvent('stage2:layout', {
        detail: {
          leftX: (stage2LeftRect.left - shellRect.left) / shellRect.width,
          leftY: (stage2LeftRect.top - shellRect.top) / shellRect.height,
          leftW: stage2LeftRect.width / shellRect.width,
          leftH: stage2LeftRect.height / shellRect.height,
          rightX: (stage2RightRect.left - shellRect.left) / shellRect.width,
          rightY: (stage2RightRect.top - shellRect.top) / shellRect.height,
          rightW: stage2RightRect.width / shellRect.width,
          rightH: stage2RightRect.height / shellRect.height
        }
      }));
    }

    function setStage(isStage2) {
      if (isStage2) {
        stage1.classList.add('opacity-0', 'pointer-events-none', 'scale-95');
        stage1.classList.add('transition', 'duration-300', 'ease-out');
        stage2.classList.remove('opacity-0', 'pointer-events-none');
        // notify blueprint to shift focus for Stage 2
        try { window.dispatchEvent(new Event('stage2:shown')); } catch (e) {}
      } else {
        stage1.classList.remove('opacity-0', 'pointer-events-none', 'scale-95');
        stage2.classList.add('opacity-0', 'pointer-events-none');
        // notify blueprint to animate when Stage 1 is shown
        try { window.dispatchEvent(new Event('stage1:shown')); } catch (e) {}
      }
      window.requestAnimationFrame(() => emitStage1Layout());
    }

    function enterStage2() {
      if (autoStageTimer) {
        window.clearTimeout(autoStageTimer);
        autoStageTimer = null;
      }
      setStage(true);
    }

    // initialize to Stage 1
    setStage(false);
    autoStageTimer = window.setTimeout(() => {
      enterStage2();
    }, AUTO_STAGE2_DELAY_MS);

    window.addEventListener('resize', emitStage1Layout);
    window.requestAnimationFrame(() => emitStage1Layout());
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => emitStage1Layout());
    }
}
