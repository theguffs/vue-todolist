const { createApp } = Vue

createApp({
    data() {
        return {
            tasks :[
                { 
                    title: "Recruiting blog post",
                    done: false 
                },
                { 
                    title: "Mobile app luaunch",
                    done: true
                },
                { 
                    title: "Interview Jhon H.",
                    done: true
                },
                { 
                    title: "Summit update to mobiile storefronts",
                    done: false 
                },
                {   title: "Schedule meeting with Alex",
                    done: true
                 },
                { 
                    title: "Homepage refresh",
                    done: true
                },
                { 
                    title: "Onboard new sales team members",
                    done: false
                }
                    ,
                { 
                    title: "Review editorial calendar", 
                    done: false
                }
            ]
        }
        methods: {
            removeTask(index) {
                this.tasks.splice(index, 1);
            }
        }
    }
}).mount('body')





// <!-- copiato e incollato con modifiche-->
// <section class="attività">
//     <h3>&#11206; Today</h3>
//     <div class="completato">&check;</div> 
//     <span class="testo"> Recruiting blog post </span>
//     <span class="info editorial"><small>editorial</small></span>
// </section>
// <!-- copiato e incollato con modifiche-->
// <section class="attività">
//     <div class="completato">&check;</div> 
//     <span class="testo"> Mobile app luaunch </span>
//     <span class="info goal"><small>Q1 Goal</small></span>
// </section>
// <!-- copiato e incollato con modifiche-->
// <section class="attività">
//     <div class="incompleto">&cross;</div> 
//     <span class="testo"> Interview Jhon H. </span>
//     <span class="info recruiting"><small>recruiting</small></span>
// </section>
// <!-- copiato e incollato con modifiche-->
// <section class="attività">
//     <div class="completato">&check;</div> 
//     <span class="testo"> Summit update to mobiile storefronts </span>
//     <span class="info mobile"><small>mobile</small></span>
// </section>
// <!-- copiato e incollato con modifiche-->
// <section class="attività">
//     <h3>&#11206; Upcoming</h3>
//     <div class="incompleto">&cross;</div> 
//     <span class="testo"> Schedule meeting with Alex </span>
// </section>
// <!-- copiato e incollato con modifiche-->
// <section class="attività">
//     <div class="completato">&check;</div> 
//     <span class="testo"> Homepage refresh </span>
//     <span class="info website"><small>Website</small></span>
// </section>
// <!-- copiato e incollato con modifiche-->
// <section class="attività">
//     <div class="completato">&check;</div> 
//     <span class="testo"> Onboard new sales team members </span>
//     <span class="info sales"><small>Sales</small></span>
// </section>
// <!-- copiato e incollato con modifiche-->
// <section class="attività">
//     <div class="completato">&check;</div> 
//     <span class="testo"> Review editorial calendar </span>
//     <span class="info editorial"><small>editorial</small></span>
// </section>