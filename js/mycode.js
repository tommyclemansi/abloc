function enableNoResize() 
{
    var frame = window.document.getElementsByName(dot_tk_frame_content)[0]
    //var frame = parent.frames['frame1'] || parent.document.getElementById('dot_tk_frame_content');
    if (frame != null)
    {frame.noResize = "false";
    frame.setAttribute('noResize', false);
     console.log("frame noresize attribute set to false");
    }
}