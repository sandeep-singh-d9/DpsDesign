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
        <div class="col-sm-4 four cell"  >
            <div class="icon_top_inner">
                <i class="fas fa-plus-circle" @click="addClick('four')"></i>
            </div>
            <div v-html="divData[dynamicIndex].four"></div>
        </div>
        <div class="col-sm-4 five cell"  >
            <div class="icon_top_inner">
                <i class="fas fa-plus-circle" @click="addClick('five')"></i>
            </div>
            <div v-html="divData[dynamicIndex].five"></div>
        </div>
        <div class="col-sm-4 six cell">
            <div class="icon_top_inner">
                <i class="fas fa-plus-circle" @click="addClick('six')"></i>
            </div>
            <div  v-html="divData[dynamicIndex].six" ></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
