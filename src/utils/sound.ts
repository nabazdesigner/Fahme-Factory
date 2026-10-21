/**
 * Web Audio API synthesizer for tactile neon click sounds
 * Works without any external audio files, with 0ms latency.
 */

let audioCtx: AudioContext | null = null;
let soundEnabled = true;

// Initialize or get AudioContext
function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function isSoundEnabled(): boolean {
  if (typeof window === 'undefined') return true;
  const stored = localStorage.getItem('fahme_sound_enabled');
  if (stored !== null) {
    soundEnabled = stored === 'true';
  }
  return soundEnabled;
}

export function setSoundEnabled(enabled: boolean): void {
  soundEnabled = enabled;
  if (typeof window !== 'undefined') {
    localStorage.setItem('fahme_sound_enabled', enabled ? 'true' : 'false');
  }
}

/**
 * Play a crisp, high-tech neon tactile click sound
 */
export function playClickSound(frequency = 1200, duration = 0.045): void {
  if (!isSoundEnabled()) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    // Highpass filter for crisp snap
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(800, ctx.currentTime);

    // Exponential rapid pitch drop (1200Hz -> 180Hz) to create tactile mechanical click
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(180, ctx.currentTime + duration);

    // Fast envelope attack and decay
    gain.gain.setValueAtTime(0.001, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.4, ctx.currentTime + 0.003);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (err) {
    console.debug('Audio play skipped', err);
  }
}

/**
 * Play a resonant neon selection chime (for tabs and key selections)
 */
export function playNeonSelectSound(): void {
  if (!isSoundEnabled()) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(1560, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.25, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.08);
  } catch (err) {
    console.debug('Audio error', err);
  }
}

/**
 * Play a pleasant neon confirmation chime (for form submit, quote request, call button)
 */
export function playSuccessSound(): void {
  if (!isSoundEnabled()) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    [587.33, 880, 1174.66].forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.06);

      gain.gain.setValueAtTime(0.001, now + idx * 0.06);
      gain.gain.linearRampToValueAtTime(0.2, now + idx * 0.06 + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.06 + 0.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.06);
      osc.stop(now + idx * 0.06 + 0.22);
    });
  } catch (err) {
    console.debug('Audio error', err);
  }
}

/**
 * Global click interceptor ensuring that ANY option, button, link, tab, or card click
 * automatically produces the neon sound effect without missing anything.
 */
export function setupGlobalSoundListener(): () => void {
  if (typeof window === 'undefined') return () => {};

  const handleGlobalClick = (event: MouseEvent) => {
    // Check if clicked element or any parent is interactive (button, a, input, select, card, option)
    const target = event.target as HTMLElement | null;
    if (!target) return;

    const interactive = target.closest('button, a, input, [role="button"], [role="tab"], select, details, summary, label, [data-clickable="true"]');
    if (interactive) {
      playClickSound();
    }
  };

  window.addEventListener('click', handleGlobalClick, { capture: true });
  return () => {
    window.removeEventListener('click', handleGlobalClick, { capture: true });
  };
}
