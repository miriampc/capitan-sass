$(_=>{
    const name=
    $.get('https://laboratoria.cuadra.co:9339/api/v1/students/',(req,res)=>{
        console.log(req);
        req.forEach((e)=>{
            const name = $(`<li>${e.name}<input type="checkbox"></li>`);
            $('#student-list').append(name);
        })
    });
});
