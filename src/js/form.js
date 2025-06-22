const Form = {
  formData: {
    email: '',
    message: '',
  },
  init() {
    this.hangListener(this.formEl, 'submit', this.onFormSubmit.bind(this));
  },
  hangListener(el = document, evt = 'click', cb = () => {}) {
    el.addEventListener(evt, cb);
  },
  onFormSubmit(e) {
    e.preventDefault();
    const { elements } = e.currentTarget;

    if (this.validate(elements?.email?.value)) {
      alert('Must not be empty');
      return;
    }
    this.email = elements.email.value;
    if (this.validate(elements?.message?.value)) {
      alert('Must not be empty');
      return;
    }
    this.message = elements.message.value;

    console.log(this.data);
    e.currentTarget.reset();
  },
  get formEl() {
    return document.querySelector('.feedback-form') ?? null;
  },
  get email() {
    return this.formData.email;
  },
  set email(value) {
    this.formData.email = value;
  },
  get message() {
    return this.formData.message;
  },
  set message(value) {
    this.formData.message = value;
  },
  get data() {
    return { ...this.formData };
  },
  validate(v) {
    return v.trim() === '';
  },
};

Form.init();
