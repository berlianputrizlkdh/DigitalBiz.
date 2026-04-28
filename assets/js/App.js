/* app.js — DigitalBiz Academy */

/* 1. TOGGLE LIHAT PASSWORD */
document.querySelectorAll('.form__eye').forEach(eye => {
    eye.addEventListener('click', function () {
        const input = document.getElementById(this.dataset.target);
        const show  = input.type === 'password';
        input.type       = show ? 'text'   : 'password';
        this.textContent = show ? '🙈'     : '👁️';
    });
});

/* 2. PASSWORD STRENGTH (register page) */
const pwInput    = document.getElementById('password');
const pwStrength = document.getElementById('pwStrength');
if (pwInput && pwStrength) {
    pwInput.addEventListener('input', function () {
        const v = this.value;
        let score = 0;
        if (v.length >= 8)  score++;
        if (/[A-Z]/.test(v)) score++;
        if (/[0-9]/.test(v)) score++;
        if (/[^A-Za-z0-9]/.test(v)) score++;
        const map = [
            { w: '0%',   c: '#e2e8f0' },
            { w: '25%',  c: '#ef4444' },
            { w: '55%',  c: '#f59e0b' },
            { w: '80%',  c: '#3b82f6' },
            { w: '100%', c: '#22c55e' },
        ];
        const s = map[score] || map[0];
        pwStrength.style.setProperty('--w', s.w);
        pwStrength.style.setProperty('--c', s.c);
    });
}

/* 3. MODAL LUPA KATA SANDI */
const modal         = document.getElementById('modalForgot');
const btnOpenModal  = document.getElementById('btnOpenModal');
const btnCloseModal = document.getElementById('btnCloseModal');
if (modal && btnOpenModal) {
    btnOpenModal.addEventListener('click', e => { e.preventDefault(); modal.style.display = 'flex'; });
    btnCloseModal.addEventListener('click', ()  => { modal.style.display = 'none'; });
    window.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });
}

/* 4. OTP FORM SUBMIT */
const otpForm = document.getElementById('otpForm');
if (otpForm) {
    otpForm.addEventListener('submit', e => {
        e.preventDefault();
        const btn = otpForm.querySelector('.btn-primary');
        btn.querySelector('.btn-text').textContent = 'Terkirim! ✓';
        btn.style.background = '#22c55e';
        setTimeout(() => {
            modal.style.display = 'none';
            btn.querySelector('.btn-text').textContent = 'Kirim Kode OTP';
            btn.style.background = '';
        }, 2000);
    });
}

/* 5. LOGIN FORM SUBMIT */
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', e => {
        e.preventDefault();
        const btn = loginForm.querySelector('.btn-primary');
        btn.querySelector('.btn-text').textContent = 'Masuk...';
        btn.disabled = true;
        setTimeout(() => {
            btn.querySelector('.btn-text').textContent = 'Berhasil! ✓';
            btn.style.background = '#22c55e';
        }, 1200);
    });
}

/* 6. REGISTER FORM SUBMIT */
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', e => {
        e.preventDefault();
        const btn = registerForm.querySelector('.btn-primary');
        btn.querySelector('.btn-text').textContent = 'Mendaftar...';
        btn.disabled = true;
        setTimeout(() => {
            btn.querySelector('.btn-text').textContent = 'Berhasil! ✓';
            btn.style.background = '#22c55e';
        }, 1200);
    });
}