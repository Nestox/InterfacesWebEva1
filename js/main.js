//  refs  //

// "squidblue": #1414bf,
// "squidorange": #ff590d,
// "squidgreen": #55d228,
// "squidpink": #ed4455
// "squidpurple": #3a0ccd,
// "squidyellow": #d0be08


const changeSplatStyle = (id) => {

    //  Var initialized  //
    const blue      = document.getElementsByClassName('bg-color-squidblue');
    const orange    = document.getElementsByClassName('bg-color-squidorange');
    const green     = document.getElementsByClassName('bg-color-squidgreen');
    const pink      = document.getElementsByClassName('bg-color-squidpink');
    const purple    = document.getElementsByClassName('bg-color-squidpurple');
    const yellow    = document.getElementsByClassName('bg-color-squidyellow');
    
    // console.log(blue  )
    // console.log(orange)
    // console.log(green )
    // console.log(pink  )
    // console.log(purple)
    // console.log(yellow)

    if (id === 'splat1')
    {
        //  Splat 2
        for (let i = 0; i < green.length; i++)
            {
                console.log(green)
                green[i].classList.replace('bg-color-squidgreen','bg-color-squidblue')
            }
        for (let i = 0; i < pink.length; i++)
            {
                console.log(pink)
                pink[i].classList.replace('bg-color-squidpink','bg-color-squidorange')
            }

        //  Splat3
        for (let i = 0; i < purple.length; i++)
            {
                purple[i].classList.replace('bg-color-squidpurple','bg-color-squidblue')
            }
        for (let i = 0; i < yellow.length; i++)
            {
                yellow[i].classList.replace('bg-color-squidyellow','bg-color-squidorange')
            }
    }
    else if (id === 'splat2')
    {
        //  Splat 1
        for (let i = 0; i < blue.length; i++)
            {
                
                blue[i].classList.replace('bg-color-squidblue', 'bg-color-squidgreen')
            }
        for (let i = 0; i < orange.length; i++)
            {
                
                orange[i].classList.replace('bg-color-squidorange','bg-color-squidpink')
            }

        //  Splat3
        for (let i = 0; i < purple.length; i++)
            {
                purple[i].classList.replace('bg-color-squidpurple', 'bg-color-squidgreen')
            }
        for (let i = 0; i < yellow.length; i++)
            {
                yellow[i].classList.replace('bg-color-squidyellow','bg-color-squidpink')
            }
    }
    else if (id === 'splat3')
    {
        //  Splat 1
        for (let i = 0; i < blue.length; i++) 
            {
                blue[i].classList.replace('bg-color-squidblue', 'bg-color-squidpurple')
            }
        for (let k = 0; k < orange.length; k++)
            {
                orange[k].classList.replace('bg-color-squidorange','bg-color-squidyellow')
            }

        //  Splat2
        for (let i = 0; i < green.length; i++)
            {
                green[i].classList.replace('bg-color-squidgreen','bg-color-squidpurple')
            }
        for (let k = 0; k < pink.length; k++)
            {
                pink[k].classList.replace('bg-color-squidpink','bg-color-squidyellow')
            }
    }
    
    // console.log(blue)
};