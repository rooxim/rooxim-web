<script setup lang="ts">
import { useField, useForm } from 'vee-validate'
import { required, email, numeric, regex } from '@vee-validate/rules';
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
import {ref} from "vue";

const actionURL = 'https://docs.google.com/forms/u/1/d/e/1FAIpQLScBtMmLiM_3682za9xJGv1dN5MRY47fsn91LUfTDDSbuSU5Jg/formResponse';
const survey = [
  {
    name: 'company',
    id: 'entry.1240651423',
    question: '法人名',
    type: 'text',
    label: "法人名",
    placeholder:"法人名",
    validate: (v:string)=>required(v)||'法人名を入力してください。',
    counter: true,
    required: true
  },
  {
    name: 'name',
    id: 'entry.1263330886',
    question: '担当者氏名',
    type: 'text',
    label: '担当者氏名',
    placeholder: '担当者指氏名',
    validate: (v:string)=>required(v)||'担当者指氏名を入力してください。',
    counter: 10,
    required: true
  },
  {
    name: 'nameRead',
    id: 'entry.998885080',
    question: '担当者氏名（カナ）',
    type: 'text',
    label: '担当者氏名（カナ）',
    placeholder: '担当者氏名（カナ）',
    validate: (v:string)=>((required(v) && regex(v,[/^[ァ-ンー 　]+$/]))||'担当者氏名（カナ）はカタカナで入力してください。'),
    counter: 10,
    required: true
  },
  {
    name: 'phoneNumber',
    id: 'entry.260898957',
    question: '電話番号',
    type: 'text',
    label: '電話番号',
    placeholder: '1234567890',
    validate: (v:string)=>((required(v) && numeric(v)) ||'電話番号はハイフン無しの数字で入力してください。'),
    counter: true,
    required: true
  },
  {
    name: 'email',
    id: 'entry.1801986930',
    question: 'メールアドレス',
    type: 'text',
    label: 'メールアドレス',
    placeholder: 'example@mail.com',
    validate: (v:string)=>((required(v) && email(v)) ||'メールアドレスではありません。メールアドレスを入力してください。'),
    counter: 256,
    required: true
  },
  {
    name: 'type',
    id: 'entry.1338785298',
    question: '業種',
    type: 'pulldown',
    label: '業種',
    placeholder: '業種',
    validate: (v:string)=>required(v)||'業種を入力してください。',
    options: [
        '製造業',
        '運輸・通信業',
        '漁業',
        '電気・ガス',
        '広告・出版・マスコミ',
        '金融・保険業',
        '卸売・小売業',
        '飲食業',
        '建築業',
        '農林・水産業',
        '鉱業',
        'サービス',
        '医療サービス',
        '不動産業'
    ],
    counter: false,
    required: true
  },
  {
    name: 'hp',
    id: 'entry.1622492023',
    question: 'ホームページURL',
    type: 'text',
    label: 'ホームページURL',
    placeholder: 'https://cto.rooxim.com/',
    validate: (v:string)=>regex(v,[/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/]) || 'URLを入力してください。',
    counter: 256,
    required: false
  },
  {
    name: 'message',
    id: 'entry.106675700',
    question: 'お問い合わせ内容',
    type: 'textarea',
    label: 'お問い合わせ内容',
    placeholder: 'お問い合わせ内容',
    validate: (v:string)=>required(v)||'お問い合わせ内容を入力してください。',
    counter: true,
    required: true
  },
];

const schema = new Map();
for (let surveyElement of survey) {
  schema.set(surveyElement.name,(v:string)=>{
    if(!surveyElement.validate)return true;
    const result = surveyElement.validate(v);
    return result;
  });
}

const {resetForm} = useForm({
  validationSchema: Object.fromEntries(schema)
});
const field = new Map();
for (let surveyElement of survey) {
  field.set(surveyElement.name, useField(surveyElement.name));
}

const submitted = ref(false);

const submit = ()=>{
  submitted.value = true;
}
const onSubmit = () =>{
  if(submitted.value){
    alert('リクエストを受け付けました。');
    submitted.value = false;
    resetForm();
  }
}
</script>
<template>
  <v-app>
    <Header />
    <v-main>
      <h1>お問い合わせ</h1>
      <v-container class="container">
        <v-row align="center">
          <form target="hidden_iframe" :action="actionURL" :onSubmit="submit">
            <v-col cols="12" v-for="form in survey">
              <v-text-field v-if="form.type=='text'"
                            v-model="field.get(form.name).value.value"
                            :error-messages="field.get(form.name).errorMessage.value"
                            v-validate="form.validate"
                            variant="outlined"
                            :counter="form.counter"
                            :label="form.label"
                            :placeholder="form.placeholder"
                            :required="form.required"
                            :name="form.id"/>

              <v-textarea v-if="form.type=='textarea'"
                          v-model="field.get(form.name).value.value"
                          :error-messages="field.get(form.name).errorMessage.value"
                          v-validate="form.validate"
                          :counter="form.counter?true:undefined"
                          variant="outlined"
                          :label="form.label"
                          :placeholder="form.placeholder"
                          :required="form.required"
                          :name="form.id" />
              <v-select v-if="form.type=='pulldown'"
                        v-model="field.get(form.name).value.value"
                        :error-messages="field.get(form.name).errorMessage.value"
                        v-validate="form.validate"
                        variant="outlined"
                        :label="form.label"
                        :placeholder="form.placeholder"
                        :required="form.required"
                        :items="form.options"
                        :name="form.id">
              </v-select>
            </v-col>
            <v-col cols="12">
              <v-btn type="submit" block color="#dd7c09">お問い合わせ送信</v-btn>
            </v-col>
          </form>
          <iframe name="hidden_iframe" style="display: none" :onload="onSubmit"></iframe>
        </v-row>
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<style scoped lang="scss">
.container{
  margin-right: auto;
  margin-left: auto;
  min-width: 320px;
  max-width: 500px;
  width: 100%;
  form{
    width: 100%;
  }
}
</style>
