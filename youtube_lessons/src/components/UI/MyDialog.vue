<template>
    <div v-if="show" class="dialog" @click="hideDialog">
        <div  @click.stop class="dialog__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import toggleMixin from '@/mixins/toggleMixin';

    export default {
        name: 'my-dialog',
        mixins: [toggleMixin]
    }
</script>

<style lang="scss" scoped>
.dialog {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;

    &__content {
        margin: auto;
        padding: 15px;
        background: white;
        border-radius: 12px;
        min-height: 100px;
        min-width: 300px;
    }
}
</style>