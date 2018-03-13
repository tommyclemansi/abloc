function enableNoResize() 
{
    //var frame = window.document.getElementsByName("dot_tk_frame_content")[0]
    var myframe = document.getElementsByTagName('frame')[0];
    //var frame = parent.frames['frame1'] || parent.document.getElementById('dot_tk_frame_content');
    if (myframe != null)
    {myframe.noResize = "false";
    myframe.setAttribute('noResize', false);
     console.log("frame noresize attribute set to false");
    }
    else {
        console.log("sorry no frame found..");
    }
}