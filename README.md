# Vuecordion
A simple Vue 2 accordion component with [Tailwind CSS](https://www.tailwindcss.com) utility classes installed. CSS classes can be replaced easily using provided props.

### 🛠 Install
`npm install vuecordion`
or
`yarn add vuecordion`

### 🔮 Usage
```html
<template>
  <div class="w-full mx-auto md:max-w-md">
    
    <vuecordion 
    	:faq="faq"
        wrapper-class="bg-blue-500 text-white"
        icon-class="w-4 h-4 text-2xl transition duration-500 delay-200 transform" 
    />
    
  </div>
</template>

<script>
import Vuecordion from 'vuecordion'
import 'vuecordion/dist/vuecordion.css'
export default {
  components: {
    Vuecordion
  },
  data() {
    return {
      faq: [
        {q: 'What is the meaning of Lorem ipsum?', a: 'Literally it does not mean anything. It is a sequence of words without a sense of Latin derivation that make up a text also known as filler text, fictitious, blind or placeholder'},
        {q: 'Why is Lorem Ipsum Dolor used?', a: 'The Lorem Ipsum text is used to fill spaces designated to host texts that have not yet been published. They use programmers, graphic designers, typographers to get a real impression of the digital / advertising / editorial product they are working on.'},
        {q: 'What is the most used version?', a: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        {q: 'What are the origins of Lorem Ipsum Dolor Sit?', a: 'Its origins date back to 45 BC. In fact, his words were randomly extracted from theDe finibus bonorum et malorum, a classic of Latin literature written by Cicero over 2000 years ago.'}
      ]
    }
  }
}
</script>
```

### 🧰 Props
| Props              |  Type  | Default                                                                                                     | Required | Description                              |
|--------------------|:------:|-------------------------------------------------------------------------------------------------------------|:--------:|------------------------------------------|
| `faq`              | Array  |                                                                                                             |    Yes   | Array of questions and answers.          |
| `wrapper-class`    | String | `w-full space-y-2`                                                                                          |          | Class binding for the main wrapper.      |
| `question-wrapper` | String | `bg-gradient cursor-pointer flex flex-wrap font-semibold items-center px-2 py-1 py-2 rounded-sm text-white` |          | Class binding for the question wrapper.  |
| `question-class`   | String | `flex-1`                                                                                                     |          | Class binding for the question title.    |
| `answer-class`     | String | `p-2 text-sm bg-gray-100 transition duration-500 ease-in-out transform bg-white`                            |          | Class binding for the answer wrapper.    |
| `icon-class`       | String | `w-4 h-4 text-2xl transition duration-200 delay-200 transform`                                              |          | Class binding for the plus sign wrapper. |

### 📝 Notes
1. Tailwind CSS is recommended for this component. If are using other CSS framework, write your own custom CSS in the `<style></style>` area of the component.
2. Currently only one question open at a time.

### 🙏 Thanks
- [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.dev/)
- Vue transitions from [vue2-transitions](https://github.com/BinarCode/vue2-transitions)