<template>
    <div class="foot-note mt-10 pt-5 border-t border-gray-500 prose prose-sm max-w-none">
        <h4>Referencias</h4>
        <ol title="Referencias" name="referencias" class="">
            <li v-for="(item, index) in items" :key="index">
                <a :href="item" :name="'referencia-' + (index + 1)" target="_blank">{{ item }}</a>
            </li>
        </ol>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: null,
        }
    },
    created() {
        let text = this.$slots.default[0].text
        this.items = text.split("\n").map(item => item.trim()).filter(item => item.length > 0)
    }
}
</script>