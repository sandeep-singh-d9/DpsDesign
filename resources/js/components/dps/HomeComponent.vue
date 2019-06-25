<template>
    <div class="main-div">
        <div class="row-parent cell">
            <div v-if="divData.length > 0">
                <div v-for="(div, index) in divData" :key="index" draggable="true" @dragstart="dragStart(index, $event)" @dragover.prevent @dragenter="dragEnter" @dragleave="dragLeave" @dragend="dragEnd" @drop="dragFinish(index, $event)">
                    <component @click="saveIndex(index)" :dynamicIndex="index" :is="div.name" ></component>
                </div>
            </div>
        </div>
        <NavigationOverlayComponent />
        <div class="col-sm-12 float-left">
            <!-- <input type="text" v-model="test"> -->
            <!-- <button @click="applyChanges" class="btn btn-primary">Apply</button> -->
            <button @click="saveData" class="btn btn-secondary">Save</button>
        </div>       
        <ModelInputComponent />
        
    </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
import FullWidthComponent from './fullWidthComponnt'
import TwoWidthComponent from './twoSideComponent'
import ThreeWidthComponent from './threeSideComponent'
import NavigationOverlayComponent from './navigationOverlayComponent'
import ModelInputComponent from './modelInputComponent'
import FourByEightComponent from './fourByEightComponent'
import EightByfourComponent from './eightByfourComponent'
import FourColumnComponent from './fourColumnComponent'
import ThreeByNineComponent from './threeByNineComponent'
import NineByThreeComponent from './nineByThreeComponent'
import TwoByTenComponent from './twoByTenComponent'
import TenBytwoComponent from './tenBytwoComponent'

export default {
    components: {
        FullWidthComponent,
        TwoWidthComponent,
        ThreeWidthComponent,
        NavigationOverlayComponent,
        ModelInputComponent,
        FourByEightComponent,
        EightByfourComponent,
        FourColumnComponent,
        ThreeByNineComponent,
        NineByThreeComponent,
        TwoByTenComponent,
        TenBytwoComponent,
       
    },
    
    data () {
        return {
            test: '',
        }
    },
    methods: {
        ...mapActions([
            
        ]),
        saveData () {
            console.log(this.divData, 'divData')
        },
    }

}
</script>

<style>

</style>
