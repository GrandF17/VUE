<template>
    <input @input="updateInput" :value="modelValue" class="input" type="text">
</template>

<script>
export default {
    name: 'my-input',
    props: {
        modelValue: [ String, Number ]
    },
    methods: {
        updateInput(event){
            this.$emit('update:modelValue', event.target.value);
        }
    }
}
</script>

<style lang="scss" scoped>
.input {
    height: 20px;
    margin-top: 5px;
    border: 2px solid green;
}
</style>