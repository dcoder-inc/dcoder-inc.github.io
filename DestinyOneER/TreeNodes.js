// You can find instructions for this file here:
// http://www.treeview.net

// Decide if the names are links or just the icons
USETEXTLINKS = 1  //replace 0 with 1 for hyperlinks

// Decide if the tree is to start all open or just showing the root folders
STARTALLOPEN = 0 //replace 0 with 1 to show the whole tree

ICONPATH = 'Support/' //change if the gif's folder is a subfolder, for example: 'images/'


USEICONS = 1

{
foldersTree = gFld("Title", "title.htm")
foldersTree.iconSrc = ICONPATH + "Gif/globe.gif"
Diag_Node = insFld(foldersTree, gFld("Destiny One", "javascript:parent.op()"))
Diag_Node.iconSrc = ICONPATH + "Gif/ERSTUDIO.gif"
Diag_Node.iconSrcClosed = ICONPATH + "Gif/ERSTUDIO.gif"
Model_Node = insFld(Diag_Node, gFld("Logical", "javascript:parent.op()"))
Model_Node.iconSrc = ICONPATH + "Gif/logical.gif"
Model_Node.iconSrcClosed = ICONPATH + "Gif/logical.gif"
{
Submodel_5bc4761377b34fa4a95be877f3d8720d = insFld(Model_Node, gFld("Access Permission", "javascript:parent.op()"))
Submodel_5bc4761377b34fa4a95be877f3d8720d.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_5bc4761377b34fa4a95be877f3d8720d.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_5bc4761377b34fa4a95be877f3d8720d, gLnk("R", "Model Image", "Content/Submodel_5bc4761377b34fa4a95be877f3d8720d_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_5bc4761377b34fa4a95be877f3d8720d, gFld("Entities", "Content/Sub_5bc4761377b34fa4a95be877f3d8720d_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_5bc4761377b34fa4a95be877f3d8720d, gFld("Attributes", "Content/Sub_5bc4761377b34fa4a95be877f3d8720d_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_9f41bc0c58c2407584bfc67d521d581a = insFld(Model_Node, gFld("Agency Contract", "javascript:parent.op()"))
Submodel_9f41bc0c58c2407584bfc67d521d581a.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_9f41bc0c58c2407584bfc67d521d581a.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_9f41bc0c58c2407584bfc67d521d581a, gLnk("R", "Model Image", "Content/Submodel_9f41bc0c58c2407584bfc67d521d581a_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_9f41bc0c58c2407584bfc67d521d581a, gFld("Entities", "Content/Sub_9f41bc0c58c2407584bfc67d521d581a_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_9f41bc0c58c2407584bfc67d521d581a, gFld("Attributes", "Content/Sub_9f41bc0c58c2407584bfc67d521d581a_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_1d6cb1521e3d4203a90926cd610b96b3 = insFld(Model_Node, gFld("Banner Import", "javascript:parent.op()"))
Submodel_1d6cb1521e3d4203a90926cd610b96b3.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_1d6cb1521e3d4203a90926cd610b96b3.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_1d6cb1521e3d4203a90926cd610b96b3, gLnk("R", "Model Image", "Content/Submodel_1d6cb1521e3d4203a90926cd610b96b3_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_1d6cb1521e3d4203a90926cd610b96b3, gFld("Entities", "Content/Sub_1d6cb1521e3d4203a90926cd610b96b3_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_1d6cb1521e3d4203a90926cd610b96b3, gFld("Attributes", "Content/Sub_1d6cb1521e3d4203a90926cd610b96b3_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_111ef19f81c54524b3cbde35b9e99fcb = insFld(Model_Node, gFld("Bundle", "javascript:parent.op()"))
Submodel_111ef19f81c54524b3cbde35b9e99fcb.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_111ef19f81c54524b3cbde35b9e99fcb.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_111ef19f81c54524b3cbde35b9e99fcb, gLnk("R", "Model Image", "Content/Submodel_111ef19f81c54524b3cbde35b9e99fcb_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_111ef19f81c54524b3cbde35b9e99fcb, gFld("Entities", "Content/Sub_111ef19f81c54524b3cbde35b9e99fcb_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_111ef19f81c54524b3cbde35b9e99fcb, gFld("Attributes", "Content/Sub_111ef19f81c54524b3cbde35b9e99fcb_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_1d28d0a6a046478d9757f830f17fb50a = insFld(Model_Node, gFld("Calendar", "javascript:parent.op()"))
Submodel_1d28d0a6a046478d9757f830f17fb50a.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_1d28d0a6a046478d9757f830f17fb50a.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_1d28d0a6a046478d9757f830f17fb50a, gLnk("R", "Model Image", "Content/Submodel_1d28d0a6a046478d9757f830f17fb50a_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_1d28d0a6a046478d9757f830f17fb50a, gFld("Entities", "Content/Sub_1d28d0a6a046478d9757f830f17fb50a_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_1d28d0a6a046478d9757f830f17fb50a, gFld("Attributes", "Content/Sub_1d28d0a6a046478d9757f830f17fb50a_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_d79c19e525fc4c679dc5eab543f606d7 = insFld(Model_Node, gFld("Catalog Export", "javascript:parent.op()"))
Submodel_d79c19e525fc4c679dc5eab543f606d7.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_d79c19e525fc4c679dc5eab543f606d7.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_d79c19e525fc4c679dc5eab543f606d7, gLnk("R", "Model Image", "Content/Submodel_d79c19e525fc4c679dc5eab543f606d7_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_d79c19e525fc4c679dc5eab543f606d7, gFld("Entities", "Content/Sub_d79c19e525fc4c679dc5eab543f606d7_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_d79c19e525fc4c679dc5eab543f606d7, gFld("Attributes", "Content/Sub_d79c19e525fc4c679dc5eab543f606d7_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_0e8c3e9af59747db974bae3e76f28331 = insFld(Model_Node, gFld("Certificate", "javascript:parent.op()"))
Submodel_0e8c3e9af59747db974bae3e76f28331.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_0e8c3e9af59747db974bae3e76f28331.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_0e8c3e9af59747db974bae3e76f28331, gLnk("R", "Model Image", "Content/Submodel_0e8c3e9af59747db974bae3e76f28331_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_0e8c3e9af59747db974bae3e76f28331, gFld("Entities", "Content/Sub_0e8c3e9af59747db974bae3e76f28331_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_0e8c3e9af59747db974bae3e76f28331, gFld("Attributes", "Content/Sub_0e8c3e9af59747db974bae3e76f28331_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_8c15e077eaff48b3935b0b1248a4aac4 = insFld(Model_Node, gFld("Conference", "javascript:parent.op()"))
Submodel_8c15e077eaff48b3935b0b1248a4aac4.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_8c15e077eaff48b3935b0b1248a4aac4.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_8c15e077eaff48b3935b0b1248a4aac4, gLnk("R", "Model Image", "Content/Submodel_8c15e077eaff48b3935b0b1248a4aac4_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_8c15e077eaff48b3935b0b1248a4aac4, gFld("Entities", "Content/Sub_8c15e077eaff48b3935b0b1248a4aac4_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_8c15e077eaff48b3935b0b1248a4aac4, gFld("Attributes", "Content/Sub_8c15e077eaff48b3935b0b1248a4aac4_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_80bffae2f4f34c40bde55ef68d006abd = insFld(Model_Node, gFld("Conference: Budget", "javascript:parent.op()"))
Submodel_80bffae2f4f34c40bde55ef68d006abd.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_80bffae2f4f34c40bde55ef68d006abd.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_80bffae2f4f34c40bde55ef68d006abd, gLnk("R", "Model Image", "Content/Submodel_80bffae2f4f34c40bde55ef68d006abd_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_80bffae2f4f34c40bde55ef68d006abd, gFld("Entities", "Content/Sub_80bffae2f4f34c40bde55ef68d006abd_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_80bffae2f4f34c40bde55ef68d006abd, gFld("Attributes", "Content/Sub_80bffae2f4f34c40bde55ef68d006abd_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_83309c09e761440292e0aa28e0f1561a = insFld(Model_Node, gFld("Conference: Fee", "javascript:parent.op()"))
Submodel_83309c09e761440292e0aa28e0f1561a.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_83309c09e761440292e0aa28e0f1561a.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_83309c09e761440292e0aa28e0f1561a, gLnk("R", "Model Image", "Content/Submodel_83309c09e761440292e0aa28e0f1561a_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_83309c09e761440292e0aa28e0f1561a, gFld("Entities", "Content/Sub_83309c09e761440292e0aa28e0f1561a_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_83309c09e761440292e0aa28e0f1561a, gFld("Attributes", "Content/Sub_83309c09e761440292e0aa28e0f1561a_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_aab95bfdb4dc4e258cab8a55370f0221 = insFld(Model_Node, gFld("Conference: Question", "javascript:parent.op()"))
Submodel_aab95bfdb4dc4e258cab8a55370f0221.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_aab95bfdb4dc4e258cab8a55370f0221.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_aab95bfdb4dc4e258cab8a55370f0221, gLnk("R", "Model Image", "Content/Submodel_aab95bfdb4dc4e258cab8a55370f0221_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_aab95bfdb4dc4e258cab8a55370f0221, gFld("Entities", "Content/Sub_aab95bfdb4dc4e258cab8a55370f0221_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_aab95bfdb4dc4e258cab8a55370f0221, gFld("Attributes", "Content/Sub_aab95bfdb4dc4e258cab8a55370f0221_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_9c0180e2018544d5915617213a3f0a76 = insFld(Model_Node, gFld("Conference: Registration Package", "javascript:parent.op()"))
Submodel_9c0180e2018544d5915617213a3f0a76.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_9c0180e2018544d5915617213a3f0a76.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_9c0180e2018544d5915617213a3f0a76, gLnk("R", "Model Image", "Content/Submodel_9c0180e2018544d5915617213a3f0a76_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_9c0180e2018544d5915617213a3f0a76, gFld("Entities", "Content/Sub_9c0180e2018544d5915617213a3f0a76_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_9c0180e2018544d5915617213a3f0a76, gFld("Attributes", "Content/Sub_9c0180e2018544d5915617213a3f0a76_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_f35ac44909b44a71ad83bf1a301146d1 = insFld(Model_Node, gFld("Conference: Registration Setting", "javascript:parent.op()"))
Submodel_f35ac44909b44a71ad83bf1a301146d1.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_f35ac44909b44a71ad83bf1a301146d1.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_f35ac44909b44a71ad83bf1a301146d1, gLnk("R", "Model Image", "Content/Submodel_f35ac44909b44a71ad83bf1a301146d1_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_f35ac44909b44a71ad83bf1a301146d1, gFld("Entities", "Content/Sub_f35ac44909b44a71ad83bf1a301146d1_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_f35ac44909b44a71ad83bf1a301146d1, gFld("Attributes", "Content/Sub_f35ac44909b44a71ad83bf1a301146d1_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_e75254f99335439a98c9c4c1e204e1f0 = insFld(Model_Node, gFld("Curriculum: Course", "javascript:parent.op()"))
Submodel_e75254f99335439a98c9c4c1e204e1f0.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_e75254f99335439a98c9c4c1e204e1f0.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_e75254f99335439a98c9c4c1e204e1f0, gLnk("R", "Model Image", "Content/Submodel_e75254f99335439a98c9c4c1e204e1f0_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_e75254f99335439a98c9c4c1e204e1f0, gFld("Entities", "Content/Sub_e75254f99335439a98c9c4c1e204e1f0_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_e75254f99335439a98c9c4c1e204e1f0, gFld("Attributes", "Content/Sub_e75254f99335439a98c9c4c1e204e1f0_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_0c1f19e568e242b5980b041dcc87c11a = insFld(Model_Node, gFld("Curriculum: Course Fee", "javascript:parent.op()"))
Submodel_0c1f19e568e242b5980b041dcc87c11a.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_0c1f19e568e242b5980b041dcc87c11a.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_0c1f19e568e242b5980b041dcc87c11a, gLnk("R", "Model Image", "Content/Submodel_0c1f19e568e242b5980b041dcc87c11a_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_0c1f19e568e242b5980b041dcc87c11a, gFld("Entities", "Content/Sub_0c1f19e568e242b5980b041dcc87c11a_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_0c1f19e568e242b5980b041dcc87c11a, gFld("Attributes", "Content/Sub_0c1f19e568e242b5980b041dcc87c11a_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_b467c660fd7b4dd4a759cdd582b6707d = insFld(Model_Node, gFld("Curriculum: Course Import", "javascript:parent.op()"))
Submodel_b467c660fd7b4dd4a759cdd582b6707d.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_b467c660fd7b4dd4a759cdd582b6707d.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_b467c660fd7b4dd4a759cdd582b6707d, gLnk("R", "Model Image", "Content/Submodel_b467c660fd7b4dd4a759cdd582b6707d_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_b467c660fd7b4dd4a759cdd582b6707d, gFld("Entities", "Content/Sub_b467c660fd7b4dd4a759cdd582b6707d_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_b467c660fd7b4dd4a759cdd582b6707d, gFld("Attributes", "Content/Sub_b467c660fd7b4dd4a759cdd582b6707d_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_d8d7f7dd01754cbe88c833e5fd1bde08 = insFld(Model_Node, gFld("Curriculum: Group Contract", "javascript:parent.op()"))
Submodel_d8d7f7dd01754cbe88c833e5fd1bde08.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_d8d7f7dd01754cbe88c833e5fd1bde08.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_d8d7f7dd01754cbe88c833e5fd1bde08, gLnk("R", "Model Image", "Content/Submodel_d8d7f7dd01754cbe88c833e5fd1bde08_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_d8d7f7dd01754cbe88c833e5fd1bde08, gFld("Entities", "Content/Sub_d8d7f7dd01754cbe88c833e5fd1bde08_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_d8d7f7dd01754cbe88c833e5fd1bde08, gFld("Attributes", "Content/Sub_d8d7f7dd01754cbe88c833e5fd1bde08_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_d08a9f42b7ae41b7bcd28b5defb64fd4 = insFld(Model_Node, gFld("Curriculum: Instructor Contract", "javascript:parent.op()"))
Submodel_d08a9f42b7ae41b7bcd28b5defb64fd4.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_d08a9f42b7ae41b7bcd28b5defb64fd4.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_d08a9f42b7ae41b7bcd28b5defb64fd4, gLnk("R", "Model Image", "Content/Submodel_d08a9f42b7ae41b7bcd28b5defb64fd4_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_d08a9f42b7ae41b7bcd28b5defb64fd4, gFld("Entities", "Content/Sub_d08a9f42b7ae41b7bcd28b5defb64fd4_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_d08a9f42b7ae41b7bcd28b5defb64fd4, gFld("Attributes", "Content/Sub_d08a9f42b7ae41b7bcd28b5defb64fd4_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_629ad316a38f418c857cf2c81b9580b7 = insFld(Model_Node, gFld("Curriculum: Interest Area", "javascript:parent.op()"))
Submodel_629ad316a38f418c857cf2c81b9580b7.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_629ad316a38f418c857cf2c81b9580b7.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_629ad316a38f418c857cf2c81b9580b7, gLnk("R", "Model Image", "Content/Submodel_629ad316a38f418c857cf2c81b9580b7_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_629ad316a38f418c857cf2c81b9580b7, gFld("Entities", "Content/Sub_629ad316a38f418c857cf2c81b9580b7_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_629ad316a38f418c857cf2c81b9580b7, gFld("Attributes", "Content/Sub_629ad316a38f418c857cf2c81b9580b7_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_4ed78b3a92aa4cb2940c7586bae19ffd = insFld(Model_Node, gFld("Curriculum: Master Course", "javascript:parent.op()"))
Submodel_4ed78b3a92aa4cb2940c7586bae19ffd.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_4ed78b3a92aa4cb2940c7586bae19ffd.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_4ed78b3a92aa4cb2940c7586bae19ffd, gLnk("R", "Model Image", "Content/Submodel_4ed78b3a92aa4cb2940c7586bae19ffd_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_4ed78b3a92aa4cb2940c7586bae19ffd, gFld("Entities", "Content/Sub_4ed78b3a92aa4cb2940c7586bae19ffd_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_4ed78b3a92aa4cb2940c7586bae19ffd, gFld("Attributes", "Content/Sub_4ed78b3a92aa4cb2940c7586bae19ffd_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_df4150ffbfa94417babe78ddbfdfd5b5 = insFld(Model_Node, gFld("Curriculum: Section", "javascript:parent.op()"))
Submodel_df4150ffbfa94417babe78ddbfdfd5b5.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_df4150ffbfa94417babe78ddbfdfd5b5.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_df4150ffbfa94417babe78ddbfdfd5b5, gLnk("R", "Model Image", "Content/Submodel_df4150ffbfa94417babe78ddbfdfd5b5_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_df4150ffbfa94417babe78ddbfdfd5b5, gFld("Entities", "Content/Sub_df4150ffbfa94417babe78ddbfdfd5b5_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_df4150ffbfa94417babe78ddbfdfd5b5, gFld("Attributes", "Content/Sub_df4150ffbfa94417babe78ddbfdfd5b5_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_2874bb6eb5a74ba5950c54f17f4c1250 = insFld(Model_Node, gFld("Curriculum: Section Attendance", "javascript:parent.op()"))
Submodel_2874bb6eb5a74ba5950c54f17f4c1250.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_2874bb6eb5a74ba5950c54f17f4c1250.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_2874bb6eb5a74ba5950c54f17f4c1250, gLnk("R", "Model Image", "Content/Submodel_2874bb6eb5a74ba5950c54f17f4c1250_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_2874bb6eb5a74ba5950c54f17f4c1250, gFld("Entities", "Content/Sub_2874bb6eb5a74ba5950c54f17f4c1250_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_2874bb6eb5a74ba5950c54f17f4c1250, gFld("Attributes", "Content/Sub_2874bb6eb5a74ba5950c54f17f4c1250_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_6440b3b6774a4956a6f378747a7b5c03 = insFld(Model_Node, gFld("Curriculum: Section Budget", "javascript:parent.op()"))
Submodel_6440b3b6774a4956a6f378747a7b5c03.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_6440b3b6774a4956a6f378747a7b5c03.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_6440b3b6774a4956a6f378747a7b5c03, gLnk("R", "Model Image", "Content/Submodel_6440b3b6774a4956a6f378747a7b5c03_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_6440b3b6774a4956a6f378747a7b5c03, gFld("Entities", "Content/Sub_6440b3b6774a4956a6f378747a7b5c03_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_6440b3b6774a4956a6f378747a7b5c03, gFld("Attributes", "Content/Sub_6440b3b6774a4956a6f378747a7b5c03_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_31cb9cbec12045bd90389566f88a357d = insFld(Model_Node, gFld("Curriculum: Section Fee", "javascript:parent.op()"))
Submodel_31cb9cbec12045bd90389566f88a357d.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_31cb9cbec12045bd90389566f88a357d.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_31cb9cbec12045bd90389566f88a357d, gLnk("R", "Model Image", "Content/Submodel_31cb9cbec12045bd90389566f88a357d_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_31cb9cbec12045bd90389566f88a357d, gFld("Entities", "Content/Sub_31cb9cbec12045bd90389566f88a357d_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_31cb9cbec12045bd90389566f88a357d, gFld("Attributes", "Content/Sub_31cb9cbec12045bd90389566f88a357d_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_b7f72c9bb2b345d397db0f315227c500 = insFld(Model_Node, gFld("Curriculum: Section Grading Sheet", "javascript:parent.op()"))
Submodel_b7f72c9bb2b345d397db0f315227c500.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_b7f72c9bb2b345d397db0f315227c500.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_b7f72c9bb2b345d397db0f315227c500, gLnk("R", "Model Image", "Content/Submodel_b7f72c9bb2b345d397db0f315227c500_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_b7f72c9bb2b345d397db0f315227c500, gFld("Entities", "Content/Sub_b7f72c9bb2b345d397db0f315227c500_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_b7f72c9bb2b345d397db0f315227c500, gFld("Attributes", "Content/Sub_b7f72c9bb2b345d397db0f315227c500_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_d4b9402804724c35830abdf012910e7b = insFld(Model_Node, gFld("Data Import and Export", "javascript:parent.op()"))
Submodel_d4b9402804724c35830abdf012910e7b.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_d4b9402804724c35830abdf012910e7b.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_d4b9402804724c35830abdf012910e7b, gLnk("R", "Model Image", "Content/Submodel_d4b9402804724c35830abdf012910e7b_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_d4b9402804724c35830abdf012910e7b, gFld("Entities", "Content/Sub_d4b9402804724c35830abdf012910e7b_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_d4b9402804724c35830abdf012910e7b, gFld("Attributes", "Content/Sub_d4b9402804724c35830abdf012910e7b_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_57143485cf4a4d45ac8d2b7336650a5a = insFld(Model_Node, gFld("Enrollment Restriction", "javascript:parent.op()"))
Submodel_57143485cf4a4d45ac8d2b7336650a5a.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_57143485cf4a4d45ac8d2b7336650a5a.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_57143485cf4a4d45ac8d2b7336650a5a, gLnk("R", "Model Image", "Content/Submodel_57143485cf4a4d45ac8d2b7336650a5a_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_57143485cf4a4d45ac8d2b7336650a5a, gFld("Entities", "Content/Sub_57143485cf4a4d45ac8d2b7336650a5a_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_57143485cf4a4d45ac8d2b7336650a5a, gFld("Attributes", "Content/Sub_57143485cf4a4d45ac8d2b7336650a5a_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_b7053d26efcc4581a1376886d39d0a63 = insFld(Model_Node, gFld("Enrollment: Application Profile", "javascript:parent.op()"))
Submodel_b7053d26efcc4581a1376886d39d0a63.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_b7053d26efcc4581a1376886d39d0a63.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_b7053d26efcc4581a1376886d39d0a63, gLnk("R", "Model Image", "Content/Submodel_b7053d26efcc4581a1376886d39d0a63_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_b7053d26efcc4581a1376886d39d0a63, gFld("Entities", "Content/Sub_b7053d26efcc4581a1376886d39d0a63_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_b7053d26efcc4581a1376886d39d0a63, gFld("Attributes", "Content/Sub_b7053d26efcc4581a1376886d39d0a63_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_5add98fc4d354a8c8cae801765a5a250 = insFld(Model_Node, gFld("Enrollment: Booking", "javascript:parent.op()"))
Submodel_5add98fc4d354a8c8cae801765a5a250.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_5add98fc4d354a8c8cae801765a5a250.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_5add98fc4d354a8c8cae801765a5a250, gLnk("R", "Model Image", "Content/Submodel_5add98fc4d354a8c8cae801765a5a250_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_5add98fc4d354a8c8cae801765a5a250, gFld("Entities", "Content/Sub_5add98fc4d354a8c8cae801765a5a250_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_5add98fc4d354a8c8cae801765a5a250, gFld("Attributes", "Content/Sub_5add98fc4d354a8c8cae801765a5a250_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_3aa6d19a45104a71a276da1e1e0e3c72 = insFld(Model_Node, gFld("Enrollment: Invoice", "javascript:parent.op()"))
Submodel_3aa6d19a45104a71a276da1e1e0e3c72.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_3aa6d19a45104a71a276da1e1e0e3c72.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_3aa6d19a45104a71a276da1e1e0e3c72, gLnk("R", "Model Image", "Content/Submodel_3aa6d19a45104a71a276da1e1e0e3c72_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_3aa6d19a45104a71a276da1e1e0e3c72, gFld("Entities", "Content/Sub_3aa6d19a45104a71a276da1e1e0e3c72_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_3aa6d19a45104a71a276da1e1e0e3c72, gFld("Attributes", "Content/Sub_3aa6d19a45104a71a276da1e1e0e3c72_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_2dc829d8c45a491dade2a9adb98edf6a = insFld(Model_Node, gFld("Enrollment: Student List", "javascript:parent.op()"))
Submodel_2dc829d8c45a491dade2a9adb98edf6a.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_2dc829d8c45a491dade2a9adb98edf6a.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_2dc829d8c45a491dade2a9adb98edf6a, gLnk("R", "Model Image", "Content/Submodel_2dc829d8c45a491dade2a9adb98edf6a_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_2dc829d8c45a491dade2a9adb98edf6a, gFld("Entities", "Content/Sub_2dc829d8c45a491dade2a9adb98edf6a_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_2dc829d8c45a491dade2a9adb98edf6a, gFld("Attributes", "Content/Sub_2dc829d8c45a491dade2a9adb98edf6a_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_324bf484108142f2a628b339c0e8d92b = insFld(Model_Node, gFld("Enrollment: Transaction Basket", "javascript:parent.op()"))
Submodel_324bf484108142f2a628b339c0e8d92b.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_324bf484108142f2a628b339c0e8d92b.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_324bf484108142f2a628b339c0e8d92b, gLnk("R", "Model Image", "Content/Submodel_324bf484108142f2a628b339c0e8d92b_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_324bf484108142f2a628b339c0e8d92b, gFld("Entities", "Content/Sub_324bf484108142f2a628b339c0e8d92b_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_324bf484108142f2a628b339c0e8d92b, gFld("Attributes", "Content/Sub_324bf484108142f2a628b339c0e8d92b_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_8dfc68e958e844f7a5b46a5d1b33f331 = insFld(Model_Node, gFld("Entity Tracking", "javascript:parent.op()"))
Submodel_8dfc68e958e844f7a5b46a5d1b33f331.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_8dfc68e958e844f7a5b46a5d1b33f331.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_8dfc68e958e844f7a5b46a5d1b33f331, gLnk("R", "Model Image", "Content/Submodel_8dfc68e958e844f7a5b46a5d1b33f331_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_8dfc68e958e844f7a5b46a5d1b33f331, gFld("Entities", "Content/Sub_8dfc68e958e844f7a5b46a5d1b33f331_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_8dfc68e958e844f7a5b46a5d1b33f331, gFld("Attributes", "Content/Sub_8dfc68e958e844f7a5b46a5d1b33f331_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_b54be187bee246288c15645395730ba0 = insFld(Model_Node, gFld("Fee", "javascript:parent.op()"))
Submodel_b54be187bee246288c15645395730ba0.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_b54be187bee246288c15645395730ba0.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_b54be187bee246288c15645395730ba0, gLnk("R", "Model Image", "Content/Submodel_b54be187bee246288c15645395730ba0_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_b54be187bee246288c15645395730ba0, gFld("Entities", "Content/Sub_b54be187bee246288c15645395730ba0_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_b54be187bee246288c15645395730ba0, gFld("Attributes", "Content/Sub_b54be187bee246288c15645395730ba0_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_339a4b2f4d254b769cf8ff171b4a728d = insFld(Model_Node, gFld("Fee: Bundle Fee", "javascript:parent.op()"))
Submodel_339a4b2f4d254b769cf8ff171b4a728d.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_339a4b2f4d254b769cf8ff171b4a728d.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_339a4b2f4d254b769cf8ff171b4a728d, gLnk("R", "Model Image", "Content/Submodel_339a4b2f4d254b769cf8ff171b4a728d_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_339a4b2f4d254b769cf8ff171b4a728d, gFld("Entities", "Content/Sub_339a4b2f4d254b769cf8ff171b4a728d_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_339a4b2f4d254b769cf8ff171b4a728d, gFld("Attributes", "Content/Sub_339a4b2f4d254b769cf8ff171b4a728d_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_bffb755daedf4e0f9119f714288ac901 = insFld(Model_Node, gFld("Fee: Conference Fee", "javascript:parent.op()"))
Submodel_bffb755daedf4e0f9119f714288ac901.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_bffb755daedf4e0f9119f714288ac901.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_bffb755daedf4e0f9119f714288ac901, gLnk("R", "Model Image", "Content/Submodel_bffb755daedf4e0f9119f714288ac901_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_bffb755daedf4e0f9119f714288ac901, gFld("Entities", "Content/Sub_bffb755daedf4e0f9119f714288ac901_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_bffb755daedf4e0f9119f714288ac901, gFld("Attributes", "Content/Sub_bffb755daedf4e0f9119f714288ac901_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_152071081db64254bb4d08048a358367 = insFld(Model_Node, gFld("Fee: Discount", "javascript:parent.op()"))
Submodel_152071081db64254bb4d08048a358367.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_152071081db64254bb4d08048a358367.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_152071081db64254bb4d08048a358367, gLnk("R", "Model Image", "Content/Submodel_152071081db64254bb4d08048a358367_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_152071081db64254bb4d08048a358367, gFld("Entities", "Content/Sub_152071081db64254bb4d08048a358367_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_152071081db64254bb4d08048a358367, gFld("Attributes", "Content/Sub_152071081db64254bb4d08048a358367_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_57aaba3c3311431282afacafe22766ff = insFld(Model_Node, gFld("Fee: Instruction Method", "javascript:parent.op()"))
Submodel_57aaba3c3311431282afacafe22766ff.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_57aaba3c3311431282afacafe22766ff.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_57aaba3c3311431282afacafe22766ff, gLnk("R", "Model Image", "Content/Submodel_57aaba3c3311431282afacafe22766ff_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_57aaba3c3311431282afacafe22766ff, gFld("Entities", "Content/Sub_57aaba3c3311431282afacafe22766ff_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_57aaba3c3311431282afacafe22766ff, gFld("Attributes", "Content/Sub_57aaba3c3311431282afacafe22766ff_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_6d936db779094bbab79840182ae77517 = insFld(Model_Node, gFld("Fee: Sales Fee", "javascript:parent.op()"))
Submodel_6d936db779094bbab79840182ae77517.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_6d936db779094bbab79840182ae77517.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_6d936db779094bbab79840182ae77517, gLnk("R", "Model Image", "Content/Submodel_6d936db779094bbab79840182ae77517_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_6d936db779094bbab79840182ae77517, gFld("Entities", "Content/Sub_6d936db779094bbab79840182ae77517_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_6d936db779094bbab79840182ae77517, gFld("Attributes", "Content/Sub_6d936db779094bbab79840182ae77517_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_2cd63c544fd14cd088246820d75e62b8 = insFld(Model_Node, gFld("Fee: Service Chage", "javascript:parent.op()"))
Submodel_2cd63c544fd14cd088246820d75e62b8.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_2cd63c544fd14cd088246820d75e62b8.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_2cd63c544fd14cd088246820d75e62b8, gLnk("R", "Model Image", "Content/Submodel_2cd63c544fd14cd088246820d75e62b8_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_2cd63c544fd14cd088246820d75e62b8, gFld("Entities", "Content/Sub_2cd63c544fd14cd088246820d75e62b8_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_2cd63c544fd14cd088246820d75e62b8, gFld("Attributes", "Content/Sub_2cd63c544fd14cd088246820d75e62b8_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_d6c740f9d95c4267a6c9961dd7cba918 = insFld(Model_Node, gFld("Fee: Special Request", "javascript:parent.op()"))
Submodel_d6c740f9d95c4267a6c9961dd7cba918.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_d6c740f9d95c4267a6c9961dd7cba918.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_d6c740f9d95c4267a6c9961dd7cba918, gLnk("R", "Model Image", "Content/Submodel_d6c740f9d95c4267a6c9961dd7cba918_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_d6c740f9d95c4267a6c9961dd7cba918, gFld("Entities", "Content/Sub_d6c740f9d95c4267a6c9961dd7cba918_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_d6c740f9d95c4267a6c9961dd7cba918, gFld("Attributes", "Content/Sub_d6c740f9d95c4267a6c9961dd7cba918_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_30b6b995b67f4183a7f633ef8bdd6dd3 = insFld(Model_Node, gFld("Fee: Surcharge", "javascript:parent.op()"))
Submodel_30b6b995b67f4183a7f633ef8bdd6dd3.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_30b6b995b67f4183a7f633ef8bdd6dd3.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_30b6b995b67f4183a7f633ef8bdd6dd3, gLnk("R", "Model Image", "Content/Submodel_30b6b995b67f4183a7f633ef8bdd6dd3_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_30b6b995b67f4183a7f633ef8bdd6dd3, gFld("Entities", "Content/Sub_30b6b995b67f4183a7f633ef8bdd6dd3_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_30b6b995b67f4183a7f633ef8bdd6dd3, gFld("Attributes", "Content/Sub_30b6b995b67f4183a7f633ef8bdd6dd3_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_d5958738c6534ae3931590a84fb4c0e5 = insFld(Model_Node, gFld("Fee: Tuition", "javascript:parent.op()"))
Submodel_d5958738c6534ae3931590a84fb4c0e5.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_d5958738c6534ae3931590a84fb4c0e5.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_d5958738c6534ae3931590a84fb4c0e5, gLnk("R", "Model Image", "Content/Submodel_d5958738c6534ae3931590a84fb4c0e5_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_d5958738c6534ae3931590a84fb4c0e5, gFld("Entities", "Content/Sub_d5958738c6534ae3931590a84fb4c0e5_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_d5958738c6534ae3931590a84fb4c0e5, gFld("Attributes", "Content/Sub_d5958738c6534ae3931590a84fb4c0e5_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_1d67e46f47454a09b0c30782283dc250 = insFld(Model_Node, gFld("GL Account", "javascript:parent.op()"))
Submodel_1d67e46f47454a09b0c30782283dc250.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_1d67e46f47454a09b0c30782283dc250.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_1d67e46f47454a09b0c30782283dc250, gLnk("R", "Model Image", "Content/Submodel_1d67e46f47454a09b0c30782283dc250_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_1d67e46f47454a09b0c30782283dc250, gFld("Entities", "Content/Sub_1d67e46f47454a09b0c30782283dc250_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_1d67e46f47454a09b0c30782283dc250, gFld("Attributes", "Content/Sub_1d67e46f47454a09b0c30782283dc250_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_a48437ad13d34fbfb1c1f4ab437abdec = insFld(Model_Node, gFld("Group Custom Content", "javascript:parent.op()"))
Submodel_a48437ad13d34fbfb1c1f4ab437abdec.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_a48437ad13d34fbfb1c1f4ab437abdec.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_a48437ad13d34fbfb1c1f4ab437abdec, gLnk("R", "Model Image", "Content/Submodel_a48437ad13d34fbfb1c1f4ab437abdec_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_a48437ad13d34fbfb1c1f4ab437abdec, gFld("Entities", "Content/Sub_a48437ad13d34fbfb1c1f4ab437abdec_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_a48437ad13d34fbfb1c1f4ab437abdec, gFld("Attributes", "Content/Sub_a48437ad13d34fbfb1c1f4ab437abdec_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_a00b418c7ea14e5e8c214819357e932a = insFld(Model_Node, gFld("Integration", "javascript:parent.op()"))
Submodel_a00b418c7ea14e5e8c214819357e932a.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_a00b418c7ea14e5e8c214819357e932a.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_a00b418c7ea14e5e8c214819357e932a, gLnk("R", "Model Image", "Content/Submodel_a00b418c7ea14e5e8c214819357e932a_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_a00b418c7ea14e5e8c214819357e932a, gFld("Entities", "Content/Sub_a00b418c7ea14e5e8c214819357e932a_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_a00b418c7ea14e5e8c214819357e932a, gFld("Attributes", "Content/Sub_a00b418c7ea14e5e8c214819357e932a_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_293113b9f84f4c6b8ac6c1d1abeb75bb = insFld(Model_Node, gFld("LMS Assesment", "javascript:parent.op()"))
Submodel_293113b9f84f4c6b8ac6c1d1abeb75bb.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_293113b9f84f4c6b8ac6c1d1abeb75bb.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_293113b9f84f4c6b8ac6c1d1abeb75bb, gLnk("R", "Model Image", "Content/Submodel_293113b9f84f4c6b8ac6c1d1abeb75bb_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_293113b9f84f4c6b8ac6c1d1abeb75bb, gFld("Entities", "Content/Sub_293113b9f84f4c6b8ac6c1d1abeb75bb_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_293113b9f84f4c6b8ac6c1d1abeb75bb, gFld("Attributes", "Content/Sub_293113b9f84f4c6b8ac6c1d1abeb75bb_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_35019f8369ab46e588d7e194427dc6e0 = insFld(Model_Node, gFld("Location", "javascript:parent.op()"))
Submodel_35019f8369ab46e588d7e194427dc6e0.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_35019f8369ab46e588d7e194427dc6e0.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_35019f8369ab46e588d7e194427dc6e0, gLnk("R", "Model Image", "Content/Submodel_35019f8369ab46e588d7e194427dc6e0_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_35019f8369ab46e588d7e194427dc6e0, gFld("Entities", "Content/Sub_35019f8369ab46e588d7e194427dc6e0_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_35019f8369ab46e588d7e194427dc6e0, gFld("Attributes", "Content/Sub_35019f8369ab46e588d7e194427dc6e0_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_5606b150bca04934a66b3fcf686d8e4e = insFld(Model_Node, gFld("Marketing Communication", "javascript:parent.op()"))
Submodel_5606b150bca04934a66b3fcf686d8e4e.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_5606b150bca04934a66b3fcf686d8e4e.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_5606b150bca04934a66b3fcf686d8e4e, gLnk("R", "Model Image", "Content/Submodel_5606b150bca04934a66b3fcf686d8e4e_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_5606b150bca04934a66b3fcf686d8e4e, gFld("Entities", "Content/Sub_5606b150bca04934a66b3fcf686d8e4e_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_5606b150bca04934a66b3fcf686d8e4e, gFld("Attributes", "Content/Sub_5606b150bca04934a66b3fcf686d8e4e_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_d78bbdc5918e43648ef0f5eb7850eaff = insFld(Model_Node, gFld("Marketing Question", "javascript:parent.op()"))
Submodel_d78bbdc5918e43648ef0f5eb7850eaff.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_d78bbdc5918e43648ef0f5eb7850eaff.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_d78bbdc5918e43648ef0f5eb7850eaff, gLnk("R", "Model Image", "Content/Submodel_d78bbdc5918e43648ef0f5eb7850eaff_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_d78bbdc5918e43648ef0f5eb7850eaff, gFld("Entities", "Content/Sub_d78bbdc5918e43648ef0f5eb7850eaff_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_d78bbdc5918e43648ef0f5eb7850eaff, gFld("Attributes", "Content/Sub_d78bbdc5918e43648ef0f5eb7850eaff_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_4c70512f58ae4bacaa4c042c60b68301 = insFld(Model_Node, gFld("Person", "javascript:parent.op()"))
Submodel_4c70512f58ae4bacaa4c042c60b68301.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_4c70512f58ae4bacaa4c042c60b68301.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_4c70512f58ae4bacaa4c042c60b68301, gLnk("R", "Model Image", "Content/Submodel_4c70512f58ae4bacaa4c042c60b68301_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_4c70512f58ae4bacaa4c042c60b68301, gFld("Entities", "Content/Sub_4c70512f58ae4bacaa4c042c60b68301_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_4c70512f58ae4bacaa4c042c60b68301, gFld("Attributes", "Content/Sub_4c70512f58ae4bacaa4c042c60b68301_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_f0c66f98ac024763a81226bd02517057 = insFld(Model_Node, gFld("Person: Affiliate", "javascript:parent.op()"))
Submodel_f0c66f98ac024763a81226bd02517057.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_f0c66f98ac024763a81226bd02517057.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_f0c66f98ac024763a81226bd02517057, gLnk("R", "Model Image", "Content/Submodel_f0c66f98ac024763a81226bd02517057_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_f0c66f98ac024763a81226bd02517057, gFld("Entities", "Content/Sub_f0c66f98ac024763a81226bd02517057_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_f0c66f98ac024763a81226bd02517057, gFld("Attributes", "Content/Sub_f0c66f98ac024763a81226bd02517057_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_72fe79faa40049708680723ff47acd4b = insFld(Model_Node, gFld("Person: Instructor", "javascript:parent.op()"))
Submodel_72fe79faa40049708680723ff47acd4b.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_72fe79faa40049708680723ff47acd4b.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_72fe79faa40049708680723ff47acd4b, gLnk("R", "Model Image", "Content/Submodel_72fe79faa40049708680723ff47acd4b_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_72fe79faa40049708680723ff47acd4b, gFld("Entities", "Content/Sub_72fe79faa40049708680723ff47acd4b_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_72fe79faa40049708680723ff47acd4b, gFld("Attributes", "Content/Sub_72fe79faa40049708680723ff47acd4b_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_647a1dd8de0e4a2ebf86db7929c9f508 = insFld(Model_Node, gFld("Person: Proctor", "javascript:parent.op()"))
Submodel_647a1dd8de0e4a2ebf86db7929c9f508.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_647a1dd8de0e4a2ebf86db7929c9f508.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_647a1dd8de0e4a2ebf86db7929c9f508, gLnk("R", "Model Image", "Content/Submodel_647a1dd8de0e4a2ebf86db7929c9f508_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_647a1dd8de0e4a2ebf86db7929c9f508, gFld("Entities", "Content/Sub_647a1dd8de0e4a2ebf86db7929c9f508_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_647a1dd8de0e4a2ebf86db7929c9f508, gFld("Attributes", "Content/Sub_647a1dd8de0e4a2ebf86db7929c9f508_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_9b3a88ce2ee345c38ad071e0d913712b = insFld(Model_Node, gFld("Person: Profile Hold", "javascript:parent.op()"))
Submodel_9b3a88ce2ee345c38ad071e0d913712b.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_9b3a88ce2ee345c38ad071e0d913712b.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_9b3a88ce2ee345c38ad071e0d913712b, gLnk("R", "Model Image", "Content/Submodel_9b3a88ce2ee345c38ad071e0d913712b_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_9b3a88ce2ee345c38ad071e0d913712b, gFld("Entities", "Content/Sub_9b3a88ce2ee345c38ad071e0d913712b_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_9b3a88ce2ee345c38ad071e0d913712b, gFld("Attributes", "Content/Sub_9b3a88ce2ee345c38ad071e0d913712b_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_55b1953822074888b4340a26d6978cab = insFld(Model_Node, gFld("Person: Profile Template", "javascript:parent.op()"))
Submodel_55b1953822074888b4340a26d6978cab.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_55b1953822074888b4340a26d6978cab.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_55b1953822074888b4340a26d6978cab, gLnk("R", "Model Image", "Content/Submodel_55b1953822074888b4340a26d6978cab_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_55b1953822074888b4340a26d6978cab, gFld("Entities", "Content/Sub_55b1953822074888b4340a26d6978cab_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_55b1953822074888b4340a26d6978cab, gFld("Attributes", "Content/Sub_55b1953822074888b4340a26d6978cab_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_d602879c3b314da38227b33a60805374 = insFld(Model_Node, gFld("Person: Staff", "javascript:parent.op()"))
Submodel_d602879c3b314da38227b33a60805374.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_d602879c3b314da38227b33a60805374.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_d602879c3b314da38227b33a60805374, gLnk("R", "Model Image", "Content/Submodel_d602879c3b314da38227b33a60805374_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_d602879c3b314da38227b33a60805374, gFld("Entities", "Content/Sub_d602879c3b314da38227b33a60805374_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_d602879c3b314da38227b33a60805374, gFld("Attributes", "Content/Sub_d602879c3b314da38227b33a60805374_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_60d3a65497f0411596c20df9babc4f4b = insFld(Model_Node, gFld("Person: Student", "javascript:parent.op()"))
Submodel_60d3a65497f0411596c20df9babc4f4b.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_60d3a65497f0411596c20df9babc4f4b.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_60d3a65497f0411596c20df9babc4f4b, gLnk("R", "Model Image", "Content/Submodel_60d3a65497f0411596c20df9babc4f4b_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_60d3a65497f0411596c20df9babc4f4b, gFld("Entities", "Content/Sub_60d3a65497f0411596c20df9babc4f4b_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_60d3a65497f0411596c20df9babc4f4b, gFld("Attributes", "Content/Sub_60d3a65497f0411596c20df9babc4f4b_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_0721576b6a4a408db11fad8c75818915 = insFld(Model_Node, gFld("Person: Student Group", "javascript:parent.op()"))
Submodel_0721576b6a4a408db11fad8c75818915.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_0721576b6a4a408db11fad8c75818915.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_0721576b6a4a408db11fad8c75818915, gLnk("R", "Model Image", "Content/Submodel_0721576b6a4a408db11fad8c75818915_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_0721576b6a4a408db11fad8c75818915, gFld("Entities", "Content/Sub_0721576b6a4a408db11fad8c75818915_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_0721576b6a4a408db11fad8c75818915, gFld("Attributes", "Content/Sub_0721576b6a4a408db11fad8c75818915_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_f584f1a2cac546eba06269f29e63d86a = insFld(Model_Node, gFld("Proficency Test", "javascript:parent.op()"))
Submodel_f584f1a2cac546eba06269f29e63d86a.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_f584f1a2cac546eba06269f29e63d86a.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_f584f1a2cac546eba06269f29e63d86a, gLnk("R", "Model Image", "Content/Submodel_f584f1a2cac546eba06269f29e63d86a_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_f584f1a2cac546eba06269f29e63d86a, gFld("Entities", "Content/Sub_f584f1a2cac546eba06269f29e63d86a_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_f584f1a2cac546eba06269f29e63d86a, gFld("Attributes", "Content/Sub_f584f1a2cac546eba06269f29e63d86a_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_be9da327b9c447a7a7eae3dcab304862 = insFld(Model_Node, gFld("Program Area and Program Stream", "javascript:parent.op()"))
Submodel_be9da327b9c447a7a7eae3dcab304862.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_be9da327b9c447a7a7eae3dcab304862.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_be9da327b9c447a7a7eae3dcab304862, gLnk("R", "Model Image", "Content/Submodel_be9da327b9c447a7a7eae3dcab304862_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_be9da327b9c447a7a7eae3dcab304862, gFld("Entities", "Content/Sub_be9da327b9c447a7a7eae3dcab304862_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_be9da327b9c447a7a7eae3dcab304862, gFld("Attributes", "Content/Sub_be9da327b9c447a7a7eae3dcab304862_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_794ccdae1fe447198be5340a544ece82 = insFld(Model_Node, gFld("Program Area, Program Stream, and Course Category", "javascript:parent.op()"))
Submodel_794ccdae1fe447198be5340a544ece82.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_794ccdae1fe447198be5340a544ece82.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_794ccdae1fe447198be5340a544ece82, gLnk("R", "Model Image", "Content/Submodel_794ccdae1fe447198be5340a544ece82_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_794ccdae1fe447198be5340a544ece82, gFld("Entities", "Content/Sub_794ccdae1fe447198be5340a544ece82_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_794ccdae1fe447198be5340a544ece82, gFld("Attributes", "Content/Sub_794ccdae1fe447198be5340a544ece82_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_4dbc88de6fb94f669d7a82535a657689 = insFld(Model_Node, gFld("Program Office and Costing Unit", "javascript:parent.op()"))
Submodel_4dbc88de6fb94f669d7a82535a657689.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_4dbc88de6fb94f669d7a82535a657689.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_4dbc88de6fb94f669d7a82535a657689, gLnk("R", "Model Image", "Content/Submodel_4dbc88de6fb94f669d7a82535a657689_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_4dbc88de6fb94f669d7a82535a657689, gFld("Entities", "Content/Sub_4dbc88de6fb94f669d7a82535a657689_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_4dbc88de6fb94f669d7a82535a657689, gFld("Attributes", "Content/Sub_4dbc88de6fb94f669d7a82535a657689_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_6febddc67c974d68b04a97122cfa871b = insFld(Model_Node, gFld("Quatz Scheduler", "javascript:parent.op()"))
Submodel_6febddc67c974d68b04a97122cfa871b.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_6febddc67c974d68b04a97122cfa871b.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_6febddc67c974d68b04a97122cfa871b, gLnk("R", "Model Image", "Content/Submodel_6febddc67c974d68b04a97122cfa871b_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_6febddc67c974d68b04a97122cfa871b, gFld("Entities", "Content/Sub_6febddc67c974d68b04a97122cfa871b_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_6febddc67c974d68b04a97122cfa871b, gFld("Attributes", "Content/Sub_6febddc67c974d68b04a97122cfa871b_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_a34278c351ed4d3a967a9f5bce3a74e5 = insFld(Model_Node, gFld("Report Generation", "javascript:parent.op()"))
Submodel_a34278c351ed4d3a967a9f5bce3a74e5.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_a34278c351ed4d3a967a9f5bce3a74e5.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_a34278c351ed4d3a967a9f5bce3a74e5, gLnk("R", "Model Image", "Content/Submodel_a34278c351ed4d3a967a9f5bce3a74e5_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_a34278c351ed4d3a967a9f5bce3a74e5, gFld("Entities", "Content/Sub_a34278c351ed4d3a967a9f5bce3a74e5_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_a34278c351ed4d3a967a9f5bce3a74e5, gFld("Attributes", "Content/Sub_a34278c351ed4d3a967a9f5bce3a74e5_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_87262a81eee14efba2c64afd23c192a4 = insFld(Model_Node, gFld("Security", "javascript:parent.op()"))
Submodel_87262a81eee14efba2c64afd23c192a4.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_87262a81eee14efba2c64afd23c192a4.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_87262a81eee14efba2c64afd23c192a4, gLnk("R", "Model Image", "Content/Submodel_87262a81eee14efba2c64afd23c192a4_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_87262a81eee14efba2c64afd23c192a4, gFld("Entities", "Content/Sub_87262a81eee14efba2c64afd23c192a4_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_87262a81eee14efba2c64afd23c192a4, gFld("Attributes", "Content/Sub_87262a81eee14efba2c64afd23c192a4_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_c4877a47fae2477ebf77b58590cf2322 = insFld(Model_Node, gFld("Specialty Program", "javascript:parent.op()"))
Submodel_c4877a47fae2477ebf77b58590cf2322.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_c4877a47fae2477ebf77b58590cf2322.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_c4877a47fae2477ebf77b58590cf2322, gLnk("R", "Model Image", "Content/Submodel_c4877a47fae2477ebf77b58590cf2322_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_c4877a47fae2477ebf77b58590cf2322, gFld("Entities", "Content/Sub_c4877a47fae2477ebf77b58590cf2322_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_c4877a47fae2477ebf77b58590cf2322, gFld("Attributes", "Content/Sub_c4877a47fae2477ebf77b58590cf2322_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_15618df34cb04c019680ae45822ebe90 = insFld(Model_Node, gFld("Specialty Program: Student Activity Rule", "javascript:parent.op()"))
Submodel_15618df34cb04c019680ae45822ebe90.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_15618df34cb04c019680ae45822ebe90.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_15618df34cb04c019680ae45822ebe90, gLnk("R", "Model Image", "Content/Submodel_15618df34cb04c019680ae45822ebe90_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_15618df34cb04c019680ae45822ebe90, gFld("Entities", "Content/Sub_15618df34cb04c019680ae45822ebe90_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_15618df34cb04c019680ae45822ebe90, gFld("Attributes", "Content/Sub_15618df34cb04c019680ae45822ebe90_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_d2901a72b5fc409baf465bdb62d0aaa5 = insFld(Model_Node, gFld("System and Configuration", "javascript:parent.op()"))
Submodel_d2901a72b5fc409baf465bdb62d0aaa5.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_d2901a72b5fc409baf465bdb62d0aaa5.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_d2901a72b5fc409baf465bdb62d0aaa5, gLnk("R", "Model Image", "Content/Submodel_d2901a72b5fc409baf465bdb62d0aaa5_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_d2901a72b5fc409baf465bdb62d0aaa5, gFld("Entities", "Content/Sub_d2901a72b5fc409baf465bdb62d0aaa5_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_d2901a72b5fc409baf465bdb62d0aaa5, gFld("Attributes", "Content/Sub_d2901a72b5fc409baf465bdb62d0aaa5_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_9151308d1f6b49c2ac0b52724a4070f3 = insFld(Model_Node, gFld("System: Notification", "javascript:parent.op()"))
Submodel_9151308d1f6b49c2ac0b52724a4070f3.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_9151308d1f6b49c2ac0b52724a4070f3.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_9151308d1f6b49c2ac0b52724a4070f3, gLnk("R", "Model Image", "Content/Submodel_9151308d1f6b49c2ac0b52724a4070f3_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_9151308d1f6b49c2ac0b52724a4070f3, gFld("Entities", "Content/Sub_9151308d1f6b49c2ac0b52724a4070f3_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_9151308d1f6b49c2ac0b52724a4070f3, gFld("Attributes", "Content/Sub_9151308d1f6b49c2ac0b52724a4070f3_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_7fa0d1b605574a368a090864eed48414 = insFld(Model_Node, gFld("User Defined Field", "javascript:parent.op()"))
Submodel_7fa0d1b605574a368a090864eed48414.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_7fa0d1b605574a368a090864eed48414.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_7fa0d1b605574a368a090864eed48414, gLnk("R", "Model Image", "Content/Submodel_7fa0d1b605574a368a090864eed48414_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_7fa0d1b605574a368a090864eed48414, gFld("Entities", "Content/Sub_7fa0d1b605574a368a090864eed48414_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_7fa0d1b605574a368a090864eed48414, gFld("Attributes", "Content/Sub_7fa0d1b605574a368a090864eed48414_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_662b1363b16441e0b56bbdeaed04eb51 = insFld(Model_Node, gFld("Workflow Definition", "javascript:parent.op()"))
Submodel_662b1363b16441e0b56bbdeaed04eb51.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_662b1363b16441e0b56bbdeaed04eb51.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_662b1363b16441e0b56bbdeaed04eb51, gLnk("R", "Model Image", "Content/Submodel_662b1363b16441e0b56bbdeaed04eb51_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_662b1363b16441e0b56bbdeaed04eb51, gFld("Entities", "Content/Sub_662b1363b16441e0b56bbdeaed04eb51_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_662b1363b16441e0b56bbdeaed04eb51, gFld("Attributes", "Content/Sub_662b1363b16441e0b56bbdeaed04eb51_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_9666bb35a4ba48609cd2a78187349bfa = insFld(Model_Node, gFld("Workflow Execution", "javascript:parent.op()"))
Submodel_9666bb35a4ba48609cd2a78187349bfa.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_9666bb35a4ba48609cd2a78187349bfa.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_9666bb35a4ba48609cd2a78187349bfa, gLnk("R", "Model Image", "Content/Submodel_9666bb35a4ba48609cd2a78187349bfa_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_9666bb35a4ba48609cd2a78187349bfa, gFld("Entities", "Content/Sub_9666bb35a4ba48609cd2a78187349bfa_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_9666bb35a4ba48609cd2a78187349bfa, gFld("Attributes", "Content/Sub_9666bb35a4ba48609cd2a78187349bfa_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
{
Submodel_d2c1f2d241c341c8bef2a9c9a4b31a65 = insFld(Model_Node, gFld("Workflow: Section Related", "javascript:parent.op()"))
Submodel_d2c1f2d241c341c8bef2a9c9a4b31a65.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_d2c1f2d241c341c8bef2a9c9a4b31a65.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_d2c1f2d241c341c8bef2a9c9a4b31a65, gLnk("R", "Model Image", "Content/Submodel_d2c1f2d241c341c8bef2a9c9a4b31a65_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_d2c1f2d241c341c8bef2a9c9a4b31a65, gFld("Entities", "Content/Sub_d2c1f2d241c341c8bef2a9c9a4b31a65_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_d2c1f2d241c341c8bef2a9c9a4b31a65, gFld("Attributes", "Content/Sub_d2c1f2d241c341c8bef2a9c9a4b31a65_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
}
