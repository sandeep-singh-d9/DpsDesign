<template>
  <div>
    <div class="icon_top">
      <a   data-toggle="tooltip" data-placement="top" title="Add New Row!">
       <i class="fas fa-plus-circle" @click="openNav"></i>  
      </a> 
       
    </div>

    <!------------------- navigation overlay--------------- -->
    <div id="myNav" class="overlay">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
      <div class="overlay-content row">
        <!-- ----------------one_column--------------- -->
        <div class="col-sm-3">
        <div class="btn_overlay_top" @click="addDiv('FullWidthComponent')">
          <div class="inner_div">
            <img src="/image/row_12.png">
            <span>One Column</span>
          </div>
        </div>
        </div>
        <!-- ----------------one_column--------------- -->
        <!-- ----------------two_column--------------- -->
        <div class="col-sm-3">
        <div class="btn_overlay_top" @click="addDiv('TwoWidthComponent')">
          <div class="inner_div">
            <img src="/image/row_6_6.png">
            <span>Two Column</span>
          </div>
        </div>
        </div>
        <!-- ----------------two_column--------------- -->
        <!-- ----------------three_column--------------- -->
        <div class="col-sm-3">
        <div class="btn_overlay_top" @click="addDiv('ThreeWidthComponent')">
          <div class="inner_div">
            <img src="/image/row_4_4_4.png">
            <span>Three Column</span>
          </div>
        </div>
        </div>
        <!-- ----------------three_column--------------- -->
      <!----------------- Four_by Eight -------------- -->
      <div class="col-sm-3">
        <div class="btn_overlay_top"  @click="addDiv('FourByEightComponent')">
          <div class="inner_div">
            <img src="/image/row_4_8.png">
            <span>4 x 8 Column </span>
          </div>
        </div>
      </div>
      <!----------------- Four_by Eight -------------- --> 
      <!----------------- Eight_by Four  -------------- --> 
      <div class="col-sm-3">
        <div class="btn_overlay_top" @click="addDiv('EightByfourComponent')" >
          <div class="inner_div">
            <img src="/image/row_8_4.png">
            <span>8 x 4 Column </span>
          </div>
        </div>
      </div>  
       <!----------------- Eight_by Four  -------------- -->  
       <!-----------------  Four_column  -------------- --> 
       <div class="col-sm-3">
        <div class="btn_overlay_top" @click="addDiv('FourColumnComponent')" >
          <div class="inner_div">
            <img src="/image/row_3_3_3_3.png">
            <span> 4 x 4 x 4 Column  </span>
          </div>
        </div>
       </div>
       <!----------------- Four_column   -------------- -->  
       <!-----------------three_nine  -------------- --> 
       <div class="col-sm-3">
        <div class="btn_overlay_top" @click="addDiv('ThreeByNineComponent')" >
          <div class="inner_div">
            <img src="/image/row_3_9.png">
            <span> 3x 9 Column  </span>
          </div>
        </div>
       </div>
       <!-----------------three_nine-------------- -->   
       <!-----------------nine_three  -------------- --> 
       <div class="col-sm-3">
        <div class="btn_overlay_top" @click="addDiv('NineByThreeComponent')" >
          <div class="inner_div">
            <img src="/image/row_9_3.png">
            <span> 9 x 3 Column  </span>
          </div>
        </div>
       </div>
       <!-----------------nine_three-------------- -->
        <!-----------------two_ten  -------------- --> 
        <div class="col-sm-3">
        <div class="btn_overlay_top" @click="addDiv('TwoByTenComponent')" >
          <div class="inner_div">
            <img src="/image/row_2_10.png">
            <span> 2 x 10 Column  </span>
          </div>
        </div>
        </div>
       <!-----------------two_ten-------------- -->  
        <!-----------------ten_two  -------------- --> 
        <div class="col-sm-3">
        <div class="btn_overlay_top" @click="addDiv('TenBytwoComponent')" >
          <div class="inner_div">
            <img src="/image/row_10_2.png">
            <span> 10 x 2 Column  </span>
          </div>
        </div>
        </div>
       <!-----------------ten_two-------------- -->   
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  methods: {
    // vuex actions
        ...mapActions([
            'ACTION_PUSH_TO_DIV_DATA',
            'ACTION_CHANGE_STATE',
        ]),
        // Add component to div
        addDiv (divName) {
            this.ACTION_PUSH_TO_DIV_DATA(divName)
            document.getElementById("myNav").style.height = "0%";
        },
        closeNav () {
          document.getElementById("myNav").style.height = "0%";
          this.ACTION_CHANGE_STATE(['showNavBar', false])
        },
        
  }
};
</script>

<style>
</style>
