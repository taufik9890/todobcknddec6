const express = require('express')
const todoModel = require('../../model/todoModel')
// const registrationControllers = require('../../controllers/registrationControllers')
// const secureApi = require('../../middleware/secureApi')
const route = express.Router()

//post all todo

route.post('/todo', async(req, res)=>{
    res.send('this is todo')
    const{title,name,description}= req.body
    try{
        const todo = new todoModel({
            title,
            name,
            description
        })
        await todo.save()
        res.status(200).send(todo)
    }
    catch(error){
        console.log(error);
    }
})

// route.post('/todo', async (req, res)=>{
//     // res.send('This is todo')
//     console.log(req.body)
//     const {title, name, description} = req.body
//     try{
//         const todo = new todoModel({
//             title,
//             name,
//             description
//         })
//         await todo.save()
//         // res.status(200).send(todo)
//         res.json({todo, message: 'Todo created successfully'})
//     }
//     catch(error){
//         console.log(error);
//     }
// })



// get all todos 


route.get('/get', async (req, res) =>{
    try{
    //    const getTodos = await todoModel.find().select({
    //     _id: 0
    //    })
    const getTodos = await todoModel.find().select("name description -_id").limit(2).sort({name: -1})
       res.send(getTodos)
       console.log(getTodos);
    }
    catch(error){
        console.log(error);
    }
})


// get single todo

route.get('/get/:id', async(req,res)=>{
    // console.log(req.params.id);
    try{
        const getTodos = await todoModel.findById(req.params.id)
        res.send(getTodos)
    }
    catch(error){
        console.log(error);
    }

})


// update todo 


route.put('/update/:id', async(req, res)=>{
    try{
        const updateTodos = await todoModel.findByIdAndUpdate(req.params.id, req.body, {new: true} )
        res.send(updateTodos)
    }
    catch(error){ 
        console.log(error);
    }
})



//delete todo
route.delete('/delete/:id', async(req, res)=>{
    try{
        const deleteTodos = await todoModel.findByIdAndDelete(req.params.id, req.body)
    }
    catch(error){
        console.log(error);
    }
})




module.exports = route



// 4.first e create korbo. so create korar jonno amra post korbo 

// 6. body request ar params request er difference hocche. ami body/form/field e jai likhi paste korbo  oite hocche body request. Ar Params hocche link/url e ja ee likhi na keno oita hocche parameter request. toh simply bolte name/description/title eigula amra body tei likhi

// 7. toh ekhon body theke amra request korbo ar ekhon amra faka object pachi karon kichu likhi nai amra. ekhon body te likhe jodi post kori tahole console.log e oigula likhe dekhabe. kintu ami jodi kono object theke description ba title delete kore jodi post kori tar poreo console log e value dekhabe. Er jonno amra required: true disi. kintu still kono difference ashe nai. Er jonno amader validation kora lagbe ba kono dhoroner condition.

// 8. toh ami req.body theke distructure kore ami {title, name, description} niye ashbo. jehitu amra async use kortesi best practice hocche try-catch use kora. eta promise method. try hocche if er moto truthy value. ar catch hocche else er moto falsy value. then er shathe try catch er difference nai temon. then o ekta promise try-catch o arekta promise shudhu async er jonno. try ar if er moddhe parthokko hocche if e ami condition dibo. try e na. amar condition jodi shob thik thake taholei ami try er bhitore dibo. ar error thake catch e

// 9. ekhon try er bhitore ami new todo banabo. new todo karon oikhane notun kore ami value add korbo. ekhane jeta bujhacche req.body theke jodi kichu pay tahole database e notun kore value gula add korbe. ekhane amar jetai request kore add kori na keno agey database e save kora lagbe. ar database e shobar agey save korte hobe. so er jonno agey database theke anbo ene save korte dibo async er pore await diye jate ekjon er por arekjon serially save hoy. erpore 200 te status respond korbo ar todo ta ami send kore dibo. mane jei value gula pacchilam oigula send kore dibo

// 10. update er jonno put method use korte hobe. update er jonno findIdandUpdate querries use kore req.params.id takey update korbo. er pasha pashi req.body teo update kore dilam. er pore ekta value add kore dilam {new: true}. Id kokhono static hoy na. Dynamic korar jono update/:id dibo. {new: true} dile amar response o updated hobe