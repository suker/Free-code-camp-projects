import React, {Component} from 'react'
import $ from 'jquery'
export default class QuoteMachine extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            quote: {
                text: "Click on Revelio to start!",
                author: "Unknown",
                film: "Harry Potter"
            },
            bgColor: ["#740001", "#ae0001", "#eeba30", "#d3a625", "#000000"],
            hasQuote: true,
        }
    }
    
    getRandomQuote = (event) =>{
        const quotes = [
            {
                text: "Mr. and Mrs. Dursley of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much.",
                author:"",
                film: "Harry Potter and the Sorcerer's Stone"
            },
            {
                text: "I hope you're pleased with yourselves. We could all have been killed — or worse, expelled. Now if you don't mind, I'm going to bed.",
                author:"Hermione Granger" ,
                film: "Harry Potter and the Sorcerer's Stone"
            },
            {
                text: "It does not do well to dwell on dreams and forget to live.",
                author:'Albus Dumbledore' ,
                film: "Harry Potter and the Sorcerer's Stone"
            },
            {
                text: "To the well-organized mind, death is but the next great adventure.",
                author:"Albus Dumbledore" ,
                film: "Harry Potter and the Sorcerer's Stone"
            },
            {
                text:"You're a little scary sometimes, you know that? Brilliant ... but scary",
                author:"Ron Weasley",
                film: "Harry Potter and the Sorcerer's Stone"
            },
            
            {
                text:"It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
                author:"Albus Dumbledore",
                film: "Harry Potter and the Sorcerer's Stone"
            },
            {
                text:"Yer a wizard Harry.",
                author:"Hagrid",
                film: "Harry Potter and the Sorcerer's Stone"
            },
            {
                text:"Fear of a name only increases fear of the thing itself.",
                author:"Hermione Granger",
                film: "Harry Potter and the Chamber of Secrets"
            },
            {
                text:"It is our choices, Harry, that show what we truly are, far more than our abilities.",
                author:"Albus Dumbledore",
                film: "Harry Potter and the Chamber of Secrets"
            },
            {
                text:"Dobby is free.",
                author:"Dobby",
                film: "Harry Potter and the Chamber of Secrets"
            },
            {
                text:"I solemnly swear I am up to no good.",
                author:"Harry Potter",
                film: "Harry Potter and the Prisoner of Azkaban"
            },
            {
                text:"Honestly, am I the only person who's ever bother to read Hogwarts: A History?",
                author:"Hermione Granter",
                film: "Harry Potter and the Prisoner of Azkaban"
            },
            {
                text:"But you know, happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
                author:"Albus Dumbledore",
                film: "Harry Potter and the Prisoner of Azkaban"
            },
            {
                text:"If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
                author:"Sirius Black",
                film: "Harry Potter and the Goblet of Fire"
            },
            {
                text:"I am what I am, an' I'm not ashamed. 'Never be ashamed,' my ol' dad used ter say, 'there's some who'll hold it against you, but they're not worth botherin' with.",
                author:"Hagrid",
                film: "Harry Potter and the Goblet of Fire"
            },
            {
                text:"It matters not what someone is born, but what they grow to be.",
                author:"Albus Dumbledore",
                film: "Harry Potter and the Goblet of Fire"
            },
            {
                text:"Things we lose have a way of coming back to us in the end, if not always in the way we expect.",
                author:"Luna Lovegood",
                film: "Harry Potter and the Order of the Phoenix."
            },
            
            {
                text:"I think we've outgrown full-time education ... Time to test our talents in the real world, d'you reckon?",
                author:"Fred Weasley",
                film: "Harry Potter and the Order of the Phoenix"
            },
            {
                text:"And now, Harry, let us step out into the night and pursue that flighty temptress, adventure.",
                author:"Albus Dumbledore",
                film: "Harry Potter and the Half-Blood Prince"
            },
            {
                text:"I think I'll just go down and have some pudding and wait for it all to turn up — it always does in the end.",
                author:"Luna Lovegood",
                film: "Harry Potter and the Order of the Phoenix"
            },
            {
                text:"Just because you have the emotional range of a teaspoon doesn't mean we all have.",
                author:"Hermione Granger",
                film: "Harry Potter and the Order of the Phoenix"
            },
            {
                text:"You can laugh, but people used to believe there were no such things as the Blibbering Humdinger or the Crumple-Horned Snorkack!",
                author:"Luna Lovegood",
                film: "Harry Potter and the Order of the Phoenix"
            },
            {
                text:"I mean, it's sort of exciting, isn't it, breaking the rules?",
                author:"Hermione Granger",
                film: "Harry Potter and the Order of the Phoenix"
            },
            {
                text:"We’ve all got both light and dark inside us. What matters is the part we choose to act on. That’s who we really are.",
                author:"Sirius Black",
                film: "Harry Potter and the Order of the Phoenix"
            },
          {
                text:"Every human life is worth the same, and worth saving.",
                author:"Kingsley Shacklebolt",
                film: "Harry Potter and the Deathly Hallows"
            },
          {
                text:"He must have known I'd run out on you.’ ‘No,’ Harry corrected him. ‘He must've always known you'd always want to come back.",
                author:"",
                film: "Harry Potter and the Deathly Hallows"
            },
          {
                text:"After all this time?' 'Always,' said Snape.",
                author:"",
                film: "Harry Potter and the Deathly Hallows"
            },
          {
                text:"Not my daughter, you b*tch!",
                author:"Molly Weasley",
                film: "Harry Potter and the Deathly Hallows"
            },
          {
                text:"I've always wanted to use that spell.",
                author:"Minerva McGonagall",
                film: "Harry Potter and the Deathly Hallows"
            },
          {
                text:"Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?",
                author:"Albus Dumbledore",
                film: "Harry Potter and the Deathly Hallows"
            },
        ]
        const griffyndorColors = ["#740001", "#ae0001", "#eeba30", "#d3a625", "#000000"]
        const slytherinColors = ["#1a472a", "#2a623d", "#aaaaaa","#5d5d5d" ,"#000000"] 
        const hufflepuffColors = ["#60605c","#ffdb00" ,"#fff4b1","#000000","#ffed86" ] 
        const ravenclawColors = ["#0e1a40", "#222f5b", "#5d5d5d", "#946b2d", "#000000"]
        const flagColors = [griffyndorColors, slytherinColors,hufflepuffColors, ravenclawColors]
        this.setState({
            quote: quotes[Math.floor(Math.random()* quotes.length)],
            bgColor: flagColors[Math.floor(Math.random()* flagColors.length)]
        })
    }

    shareOnTwitter = (text, author, film) => {
        const url = "https://codepen.io/Suk3r";
        window.open('http://twitter.com/share?url='+encodeURIComponent(url)+'&text='+encodeURIComponent('“'+ text + '” —' + author+ ", " + film), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0')
    }


    render (){
        const {text, author, film} = this.state.quote;
        
        return (
        <div className="bg" style={{background: this.state.bgColor[1]}}>
            <div className="container d-flex flex-column" id= "quote-box">
                <div className="row">
                    <div className="col">
                    <h1 style={{color: this.state.bgColor[1] }}>Harry Potter Quotes Machine</h1>
                    </div>
                </div>
                    
                <div className="row">
                    <div className="col">
                    <div id="text" style={{color: this.state.bgColor[0] }}>“{text}”</div>
                    
                    {this.state.quote.author  ? <em id="author" style={{color: this.state.bgColor[3]}}> — {author}, {film}</em>
                    : <em id="author" style={{color: this.state.bgColor[3]}}> — {film}</em>
                    }
                    </div>
                </div>
                    
                <div className="row">
                    <div className="col-4">
                        <button style={{background: this.state.bgColor[1]}} className="btn revelioBtn" id="new-quote" onClick={this.getRandomQuote}>Revelio!</button>
                    </div>
                    <div className="col-8">
                    <a id="tweet-quote" target="_blank" href="https://www.twitter.com/intent/tweet" className="fa fa-twitter"><button style={{background: this.state.bgColor[1], marginRight: 10}} className="btn tweet-btn" onClick={() => this.shareOnTwitter(text, author, film)}><span className="fa fa-twitter"></span></button></a>
                    <button style={{background: this.state.bgColor[1]}} className="btn face-btn" ><a href="#" className="fa fa-facebook"></a></button>
                    </div>
                </div>
            </div>
            <div className="footer"><a target="_blank" href="https://codepen.io/Suk3r/">by xsuker</a></div>
        </div>  
        )
    }
}
