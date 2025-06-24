const Form = {
  DATA_KEY: 'form_data_key',
  formData: {
    email: '',
    message: '',
  },
  init() {
    this.initialValues();
    this.hangListener(this.formEl, 'submit', this.onFormSubmit.bind(this));
  },
  savetoLocalStorage(data, key) {
    localStorage.setItem(key, JSON.stringify(data));
  },
  loadFromLocalStorage(key) {
    try {
      const parsedData = localStorage.getItem(key);
      if (!parsedData) return;
      return JSON.parse(parsedData);
    } catch (error) {
      console.log(error);
    }
  },
  initialValues() {
    const parsedData = this.loadFromLocalStorage(this.DATA_KEY);
    if (typeof parsedData !== 'object' || !this.formEl) return;

    this.formEl.elements.email.value = parsedData.email;
    this.formEl.elements.message.value = parsedData.message;
  },
  hangListener(el = document, evt = 'click', cb = () => {}) {
    el.addEventListener(evt, cb);
  },
  onFormSubmit(e) {
    e.preventDefault();
    const { elements } = e.currentTarget;
    this.email = elements.email.value;
    this.message = elements.message.value;

    console.log(this.data);
    this.savetoLocalStorage(this.data, this.DATA_KEY);
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
};

Form.init();
