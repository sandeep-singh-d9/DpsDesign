<template>
    <div class="row full_layer_row">
        <div class="overlay_delete">
            <a class="btn">
                <span class="text_content">
                    <i class="fas fa-trash-alt" @click="removeFromDiv"></i>
                </span>
            </a>
             <a class="btn">
                <span class="text_content">
                    <i class="fas fa-arrows-alt"></i>
                </span>
            </a>
        </div>
        <div class="col-sm-2 nineteen cell">
             <div class="icon_top_inner">
                <i class="fas fa-plus-circle"  @click="addClick('nineteen')"></i>
            </div>
            <div v-html="divData[dynamicIndex].nineteen"></div>
        </div>
        <div class="col-sm-10 twenty cell">
             <div class="icon_top_inner">
                <i class="fas fa-plus-circle" @click="addClick('twenty')"></i>
            </div>
            <div v-html="divData[dynamicIndex].twenty"></div>            
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
