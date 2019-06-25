<template>
    <div>
        <div class="modal fade show_data" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Settings</h5>
                    </div>
                    <div class="modal-body">
                        <ul class="nav nav-tabs">
                            <li class="active">
                                <a class="active" data-toggle="tab" href="#content">Content</a>
                            </li>
                            <li >
                                <a data-toggle="tab" href="#design">
                                  Upload Image
                                </a>
                            </li>
                            <!-- <li>
                                <a data-toggle="tab" href="#advance">Advance</a>
                            </li> -->
                        </ul>
                        <div class="tab-content">
                            <div id="content" class="side_bar_content tab-pane active">
                              <div class="content_area">
                                 <div class="font_content">Add Content</div>
                                 <div class="editable" contenteditable="true">
                                 </div>
                              </div>
                                <div class="font_content">Body font</div>
                                <select class="dataselect" @change="addfont('fontName', false , font)" v-model="font">
                                    <option value>
                                        <span class="text_content">Select Font</span>
                                    </option>
                                    <option v-for="(font, index) in fontFamily" :key="index" :value="font.family">{{ font.family }}</option>
                                </select>

                                <a class="btn">
                                    <span class="text_content">
                                       <i class="fas fa-trash-alt" @click="removeFromDiv" data-dismiss="modal"></i>
                                    </span>
                                </a>
                                <div class="font_body">
                                   <div class="font_content">
                                     Body font Style
                                   </div>
                                <ul>
                                    <li>
                                      <a @click="addfont('italic', false, null)"     class="btn">
                                        <i class="fas fa-italic"></i>
                                      </a>    
                                    </li>
                                  <li>
                                    <a @click="addfont('bold', false, null)"  class="btn">
                                        <i class="fas fa-bold"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a @click="addfont('underline', false, null)" class="btn">
                                      <i class="fas fa-underline"></i>
                                    </a>
                                  </li>
                                </ul>
                                </div>
                               
                                <div class="font_body">
                                  <div class="font_content">
                                    Body Text Alignment
                                  </div>
                                   <ul>
                                <li>
                                  <a @click="addfont('justifyLeft' ,false, null)"  class="btn">
                                    <i class="fas fa-align-left"></i>
                                </a>
                                </li>
                                <li>
                                  <a @click="addfont('justifyCenter', false, null)" class="btn">
                                    <i class="fas fa-align-center"></i>
                                  </a>  
                                </li> 
                                
                                 <li>
                                   <a  @click="addfont('justifyRight' ,false, null)" class="btn">
                                     <i class="fas fa-align-right"></i>
                                   </a>
                                 </li>
                                <li>
                                  <a @click="addfont('justifyFull' ,false, null)" class="btn">
                                    <i class="fas fa-align-justify"></i>
                                 </a>
                                </li>
                               </ul> 
                                </div>
                              
                                <div class="font_content">Body text Color</div>
                                <input type="color" name="favcolor" value="#ff0000" @change="changeColor" class="form-control dataselect2">
                            </div>
                            <div id="design" class="tab-pane">
                                <div class="content_tab_inner">
                                    <div class="media_area">
                                      <div class="font_content">Upload Image</div>
                                      <button class="btn">
                                        <span class="font_content">Add Media</span>
                                      </button>
                                      <div class="content_area">
                                        <div class="editable">
                                        </div>
                                      </div>
                                    </div> 
                                      <!-- <a @click="addfont('italic', false, null)" class="btn">
                                        <i class="fas fa-italic"></i>
                                    </a>
                                    <a @click="addfont('bold', false, null)" class="btn">
                                        <i class="fas fa-bold"></i>
                                    </a>
                                    <a @click="addfont('underline', false, null)" class="btn">
                                        <i class="fas fa-underline"></i>
                                    </a>
                                    <input type="color" name="favcolor" value="#ff0000" @change="changeColor" class="form-control dataselect2"> -->
                                </div>
                            </div>
                            <!-- <div id="advance" class="tab-pane fade">
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                            </div> -->
                        </div>
                    </div>
                    <div class="modal-footer">
                        <div class="inner_footer_content">
                            <a class="btn two" data-dismiss="modal">
                                <i class="fa fa-window-close" aria-hidden="true"></i>
                            </a>
                            <a class="btn three" @click="addfont('redo', false, null)">
                                <i class="fas fa-redo-alt"></i>
                            </a>
                            <a class="btn four" @click="addfont('undo', false, null)">
                                <i class="fas fa-undo"></i>
                            </a>
                            <a class="btn one" @click="applyChanges" data-dismiss="modal">
                                <i class="fas fa-check"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
    import { bus } from "../../app";
    export default {
      
        data() {
                return {
                  
                };
            },
            computed: {
                ...mapState([
                  "editorTempData",
                  ])
            },
            created() {},
            mounted() {
                $("#exampleModal").modal({
                    focus: false,
                    // Do not show modal when innitialized.
                    show: false
                }); 
            },
            methods: {
             
            }
    };
</script>

<style>

</style>