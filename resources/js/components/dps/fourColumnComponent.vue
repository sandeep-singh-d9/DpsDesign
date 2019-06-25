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
        <div class="col-sm-3 eleven cell">
            <div class="icon_top_inner">
                <i class="fas fa-plus-circle" @click="addClick('eleven')"></i>
            </div>
          <div  v-html="divData[dynamicIndex].eleven"></div>
        </div>
        <div class="col-sm-3 twelve cell">
            <div class="icon_top_inner">
                <i class="fas fa-plus-circle"  @click="addClick('twelve')"></i>
            </div>
            <div v-html="divData[dynamicIndex].twelve"></div>
        </div>
        <div class="col-sm-3 thirteen cell" >
            <div class="icon_top_inner">
                <i class="fas fa-plus-circle" @click="addClick('thirteen')"></i>
            </div>
            <div v-html="divData[dynamicIndex].thirteen"></div>
        </div>
        <div class="col-sm-3  fourteen cell">
            <div class="icon_top_inner">
                <i class="fas fa-plus-circle" @click="addClick('fourteen')"></i>
            </div>
            <div v-html="divData[dynamicIndex].fourteen"></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
