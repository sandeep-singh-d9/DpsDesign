<template>
    <div  class="row full_layer_row">
        <div class="overlay_delete">
            <a class="btn">
                <span class="text_content">
                    <i class="fas fa-trash-alt" @click="removeFromDiv"></i>
                </span>
            </a>
             <a class="btn">
                <span class="text_content">
                    <i class="fas fa-arrows-alt" ></i>
                </span>
            </a>
        </div>
        <div class="col-sm-3 fifteen cell">
            <div class="icon_top_inner">
                <i class="fas fa-plus-circle" @click="addClick('fifteen')"></i>
            </div>
            <div v-html="divData[dynamicIndex].fifteen"></div>
        </div>
        <div class="col-sm-9 sixteen cell">
            <div class="icon_top_inner">
                <i class="fas fa-plus-circle" @click="addClick('sixteen')"></i>
            </div>
            <div v-html="divData[dynamicIndex].sixteen"></div>            
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
