export const generateCode = function(formJson) {
  let formJsonStr = JSON.stringify(formJson)
  return `<!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
    <title>VForm Demo</title>
    <link rel="stylesheet" href="https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/element-plus/2.0.4/index.min.css" />
    <link rel="stylesheet" href="https://ks3-cn-beijing.ksyun.com/vform3/render.style.css?t=20220129">
    <style type="text/css">
    </style>
  </head>
  <body>
    <div id="app">
      <v-form-render :form-json="formJson" :form-data="formData" :option-data="optionData" ref="vFormRef">
      </v-form-render>
      <el-button type="primary" @click="submitForm">Submit</el-button>
    </div>
  <script src="https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/vue/3.2.30/vue.global.min.js"></script>
  <script src="https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/element-plus/2.0.4/index.full.min.js"></script>
  <script src="https://ks3-cn-beijing.ksyun.com/vform3/render.umd.js?t=20220129"></script>
  <script>
    const { createApp } = Vue;
    const app = createApp({
        data() {
          return {
            formJson: ${formJsonStr},
            formData: {},
            optionData: {}
          }
        },
        methods: {
          submitForm() {
            this.$refs.vFormRef.getFormData().then( (formData) => {
              alert( JSON.stringify(formData) )
            }).catch( function(error) {
              alert(error)
            })
          }
        }
    });
    app.use(ElementPlus)
    app.use(VFormRender)
    app.mount("#app");
  </script>
  </body>
  </html>`
}
