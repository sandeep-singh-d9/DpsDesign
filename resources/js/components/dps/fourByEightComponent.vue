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
                    <i class="fas fa-arrows-alt"></i>
                </span>
            </a>
        </div>
        <div class="col-sm-4 seven cell">
             <div class="icon_top_inner">
                <i class="fas fa-plus-circle"  @click="addClick('seven')"></i>
            </div>
            <div  v-html="divData[dynamicIndex].seven"></div>         
        </div>
        <div class="col-sm-8  eight cell">
            <div class="icon_top_inner">
                <i class="fas fa-plus-circle" @click="addClick('eight')"></i>
            </div>
            <div v-html="divData[dynamicIndex].eight"></div>         
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
