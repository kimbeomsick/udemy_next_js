import MeetupList from "@/components/meetups/MeetupList"


export default function HomePage(){
const DUMMY_MEETUP = [
    {
        id:"m1",
        title:"A firest Meetup",
        image:'https://upload.wikimedia.org/wikipedia/commons/3/3c/Vue_de_nuit_de_la_Place_Stanislas_%C3%A0_Nancy.jpg',
        address:"some address 5, 1234 some city",
        description :"this is a first meetup"
    },
    {
        id:"m2",
        title:"A second Meetup",
        image:'https://www.travelandleisure.com/thmb/rbPz5_6COrWFh94qFRHYLJrRM-g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/iguazu-falls-argentina-brazil-MOSTBEAUTIFUL0921-e967cc4764ca4eb2b9941bd1b48d64b5.jpg',
        address:"some address 15, 12324 some city",
        description :"this is a second meetup"
    }
]

    return (
        <>
            <MeetupList meetups={DUMMY_MEETUP}/>
        </>
    )
}