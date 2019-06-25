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
    <div class="col-sm-12 one cell"  >
         <div class="icon_top_inner">
            <i class="fas fa-plus-circle" @click="addClick('one')"></i>
        </div>
        <div v-html="divData[dynamicIndex].one"></div>
    </div>
</div>
</template>

<script>
export default {
    
    methods: {
        
    }
}
</script>

<style>

</style>
