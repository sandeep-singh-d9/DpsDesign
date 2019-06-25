<template>
   <div>
        <div class="row full_layer_row">
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
            <div class="col-sm-10 twentyone cell" >
                <div class="icon_top_inner">
                    <i class="fas fa-plus-circle"  @click="addClick('twentyone')"></i>
                </div>
                <div  v-html="divData[dynamicIndex].twentyone"></div>            
            </div>
            <div class="col-sm-2 twentytwo cell" >
                <div class="icon_top_inner">
                    <i class="fas fa-plus-circle"  @click="addClick('twentytwo')"></i>
                </div>
                <div v-html="divData[dynamicIndex].twentytwo"></div>            
            </div>
        </div>
        <!-- <div class="icon_top">
            <i class="fas fa-plus-circle" @click="openNav"></i>
        </div> -->
    </div> 
</template>

<script>
export default {

}
</script>

<style>

</style>
