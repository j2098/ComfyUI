var __defProp=Object.defineProperty;var __name=(target,value)=>__defProp(target,"name",{value,configurable:!0});import{B as BaseStyle,q as script$2,ak as UniqueComponentId,cf as script$4,l as script$5,S as Ripple,aB as resolveComponent,o as openBlock,f as createElementBlock,D as mergeProps,H as createBaseVNode,J as renderSlot,T as normalizeClass,X as toDisplayString,I as createCommentVNode,k as createBlock,M as withCtx,G as resolveDynamicComponent,N as createVNode,aC as Transition,i as withDirectives,v as vShow}from"./index-DS26FKwS.js";import{s as script$3}from"./index-D2KQN5Du.js";var theme=__name(function(_ref){var dt=_ref.dt;return`
.p-panel {
    border: 1px solid `.concat(dt("panel.border.color"),`;
    border-radius: `).concat(dt("panel.border.radius"),`;
    background: `).concat(dt("panel.background"),`;
    color: `).concat(dt("panel.color"),`;
}

.p-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: `).concat(dt("panel.header.padding"),`;
    background: `).concat(dt("panel.header.background"),`;
    color: `).concat(dt("panel.header.color"),`;
    border-style: solid;
    border-width: `).concat(dt("panel.header.border.width"),`;
    border-color: `).concat(dt("panel.header.border.color"),`;
    border-radius: `).concat(dt("panel.header.border.radius"),`;
}

.p-panel-toggleable .p-panel-header {
    padding: `).concat(dt("panel.toggleable.header.padding"),`;
}

.p-panel-title {
    line-height: 1;
    font-weight: `).concat(dt("panel.title.font.weight"),`;
}

.p-panel-content {
    padding: `).concat(dt("panel.content.padding"),`;
}

.p-panel-footer {
    padding: `).concat(dt("panel.footer.padding"),`;
}
`)},"theme"),classes={root:__name(function(_ref2){var props=_ref2.props;return["p-panel p-component",{"p-panel-toggleable":props.toggleable}]},"root"),header:"p-panel-header",title:"p-panel-title",headerActions:"p-panel-header-actions",pcToggleButton:"p-panel-toggle-button",contentContainer:"p-panel-content-container",content:"p-panel-content",footer:"p-panel-footer"},PanelStyle=BaseStyle.extend({name:"panel",theme,classes}),script$1={name:"BasePanel",extends:script$2,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:__name(function(){return{severity:"secondary",text:!0,rounded:!0}},"_default")}},style:PanelStyle,provide:__name(function(){return{$pcPanel:this,$parentInstance:this}},"provide")},script={name:"Panel",extends:script$1,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:__name(function(){return{id:this.$attrs.id,d_collapsed:this.collapsed}},"data"),watch:{"$attrs.id":__name(function(newValue){this.id=newValue||UniqueComponentId()},"$attrsId"),collapsed:__name(function(newValue){this.d_collapsed=newValue},"collapsed")},mounted:__name(function(){this.id=this.id||UniqueComponentId()},"mounted"),methods:{toggle:__name(function(event){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:event,value:this.d_collapsed})},"toggle"),onKeyDown:__name(function(event){(event.code==="Enter"||event.code==="NumpadEnter"||event.code==="Space")&&(this.toggle(event),event.preventDefault())},"onKeyDown")},computed:{buttonAriaLabel:__name(function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header},"buttonAriaLabel")},components:{PlusIcon:script$3,MinusIcon:script$4,Button:script$5},directives:{ripple:Ripple}},_hoisted_1=["id"],_hoisted_2=["id","aria-labelledby"];function render(_ctx,_cache,$props,$setup,$data,$options){var _component_Button=resolveComponent("Button");return openBlock(),createElementBlock("div",mergeProps({class:_ctx.cx("root")},_ctx.ptmi("root")),[createBaseVNode("div",mergeProps({class:_ctx.cx("header")},_ctx.ptm("header")),[renderSlot(_ctx.$slots,"header",{id:$data.id+"_header",class:normalizeClass(_ctx.cx("title"))},function(){return[_ctx.header?(openBlock(),createElementBlock("span",mergeProps({key:0,id:$data.id+"_header",class:_ctx.cx("title")},_ctx.ptm("title")),toDisplayString(_ctx.header),17,_hoisted_1)):createCommentVNode("",!0)]}),createBaseVNode("div",mergeProps({class:_ctx.cx("headerActions")},_ctx.ptm("headerActions")),[renderSlot(_ctx.$slots,"icons"),_ctx.toggleable?(openBlock(),createBlock(_component_Button,mergeProps({key:0,id:$data.id+"_header",class:_ctx.cx("pcToggleButton"),"aria-label":$options.buttonAriaLabel,"aria-controls":$data.id+"_content","aria-expanded":!$data.d_collapsed,unstyled:_ctx.unstyled,onClick:$options.toggle,onKeydown:$options.onKeyDown},_ctx.toggleButtonProps,{pt:_ctx.ptm("pcToggleButton")}),{icon:withCtx(function(slotProps){return[renderSlot(_ctx.$slots,_ctx.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:$data.d_collapsed},function(){return[(openBlock(),createBlock(resolveDynamicComponent($data.d_collapsed?"PlusIcon":"MinusIcon"),mergeProps({class:slotProps.class},_ctx.ptm("pcToggleButton").icon),null,16,["class"]))]})]}),_:3},16,["id","class","aria-label","aria-controls","aria-expanded","unstyled","onClick","onKeydown","pt"])):createCommentVNode("",!0)],16)],16),createVNode(Transition,mergeProps({name:"p-toggleable-content"},_ctx.ptm("transition")),{default:withCtx(function(){return[withDirectives(createBaseVNode("div",mergeProps({id:$data.id+"_content",class:_ctx.cx("contentContainer"),role:"region","aria-labelledby":$data.id+"_header"},_ctx.ptm("contentContainer")),[createBaseVNode("div",mergeProps({class:_ctx.cx("content")},_ctx.ptm("content")),[renderSlot(_ctx.$slots,"default")],16),_ctx.$slots.footer?(openBlock(),createElementBlock("div",mergeProps({key:0,class:_ctx.cx("footer")},_ctx.ptm("footer")),[renderSlot(_ctx.$slots,"footer")],16)):createCommentVNode("",!0)],16,_hoisted_2),[[vShow,!$data.d_collapsed]])]}),_:3},16)],16)}__name(render,"render");script.render=render;export{script as s};
//# sourceMappingURL=index-DcbEu8dD.js.map
