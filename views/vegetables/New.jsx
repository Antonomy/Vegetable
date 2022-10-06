const React = require('react')

class New extends React.Component{
    render(){
        return (
            <>
            <h1>Create A New Vegetable</h1>
            <nav>
                <a href="/vegetables">Go Back To Vegetables Home Page</a>
            </nav>
            <form method="POST" action="/vegetables">
                Name: <input type="text" name="name" placeholder="Name of Vegetable Here" /> <br />
                Color: <input type="text" name="color" placeholder="Color of Fruit Here" /> <br />
                Is Ready To Eat: <input type="checkbox" name="readyToEat" /> <br />
                <input type="submit" value="Submit Fruit"/>
            </form>
            </>
        )
    }
}



module.exports = New