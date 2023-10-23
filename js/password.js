new Vue({
    el: "#signup-form",
    data: {
        password: "",
    },
    computed: {
        showError() {
            return this.password.length < 8 || this.password.length > 16;
        },
        showValid() {
            return !this.showError && this.password.length > 0;
        },
    },
});
