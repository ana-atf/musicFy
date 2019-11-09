import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   songList = [
    {
      id: 0,
      autor: 'Blur',
      title: 'Girls and Boys 1',
      cancion: 'Blur (The Best Of) - Girls and Boys.mp3',
      imagen: 'a_cover-02.jpg',
      lyrics: `Street's like a jungle
     So call the police
     Following the herd
     Down to Greece
     On holiday
     Love in the nineties
     Is paranoid
     On sunny beaches
     Take your chances
     Looking for
     Girls who are boys
     Who like boys to be girls
     Who do boys like they're girls
     Who do girls like they're boys
     Always should be someone you really love
     Avoiding all work
     Because there's none available
     Like battery thinkers
     Count your thoughts
     On one-two-three-four-five fingers
     Nothing is wasted
     Only reproduced
     You get nasty blisters
     Du bist sehr schan
     But we haven't been introduced
     Girls who are boys
     Who like boys to be girls
     Who do boys like they're girls
     Who do girls like they're boys
     Always should be someone you really love
     Girls who are boys
     Who like boys to be girls
     Who do boys like they're girls
     Who do girls like they're boys
     Always should be someone to really love
     Looking for girls who are boys
     Who like boys to be girls
     Who do boys like they're girls
     Who do girls like they're boys
     Always should be someone you really love
     Girls who are boys
     Who like boys to be girls
     Who do boys like they're girls
     Who do girls like they're boys
     Always should be someone you really love
     Girls who are boys
     Who like boys to be girls
     Who do boys like they're girls
     Who do girls like they're boys
     Always should be someone you really love
     Girls who are boys
     Who like boys to be girls
     Who do boys like they're girls
     Who do girls like they're boys
     Always should be someone to really love`
    },

    {
      id: 1,
      autor: 'Queen',
      title: 'Don t Stop Me Now',
      cancion: 'Queen - Dont Stop Me Now.mp3',
      imagen: 'a_cover-01.jpg',
      lyrics: `Tonight, I'm gonna have myself a real good time
     I feel alive and the world I'll turn it inside out, yeah
     And floating around in ecstasy
     So don't stop me now don't stop me
     'Cause I'm having a good time, having a good time
     I'm a shooting star, leaping through the sky
     Like a tiger defying the laws of gravity
     I'm a racing car, passing by like Lady Godiva
     I'm gonna go, go, go
     There's no stopping me
     I'm burnin' through the sky, yeah
     Two hundred degrees
     That's why they call me Mister Fahrenheit
     I'm traveling at the speed of light
     I wanna make a supersonic man out of you
     Don't stop me now, I'm having such a good time
     I'm having a ball
     Don't stop me now
     If you wanna have a good time, just give me a call
     Don't stop me now ('cause I'm having a good time)
     Don't stop me now (yes, I'm havin' a good time)
     I don't want to stop at all
     Yeah, I'm a rocket ship on my way to Mars
     On a collision course
     I am a satellite, I'm out of control
     I am a sex machine, ready to reload
     Like an atom bomb about to
     Oh, oh, oh, oh, oh explode
     I'm burnin' through the sky, yeah
     Two hundred degrees
     That's why they call me Mister Fahrenheit
     I'm traveling at the speed of light
     I wanna make a supersonic woman of you
     Don't stop me, don't stop me
     Don't stop me, hey, hey, hey
     Don't stop me, don't stop me
     Ooh ooh ooh, I like it
     Don't stop me, don't stop me
     Have a good time, good time
     Don't stop me, don't stop me, ah
     Oh yeah
     Alright
     Oh, I'm burnin' through the sky, yeah
     Two hundred degrees
     That's why they call me Mister Fahrenheit
     I'm traveling at the speed of light
     I wanna make a supersonic man out of you
     Don't stop me now, I'm having such a good time
     I'm having a ball
     Don't stop me now
     If you wanna have a good time (wooh)
     Just give me a call (alright)
     Don't stop me now ('cause I'm having a good time, yeah yeah)
     Don't stop me now (yes, I'm havin' a good time)
     I don't want to stop at all
     La da da da daah
     Da da da haa
     Ha da da ha ha haaa
     Ha da daa ha da da aaa
     Ooh ooh ooh`
    },

    {
      id: 2,
      autor: 'Ella F. and Louis Armstrong',
      title: 'Lets Call the Whole Thing Off',
      cancion: 'Ella F. and Louis Armstrong - Lets Call the Whole Thing Off.mp3',
      imagen: 'a_cover-03.jpg',
      lyrics: `Things have come to a pretty pass
      Our romance is growing flat
      For you like this and the other
      While I go for this and that
      Goodness knows what the end will be
      Oh, I don't know where I'm at
      It looks as if we two will never be one
      Something must be done
      You say either and I say either
      You say neither and I say neither
      Either, either, neither, neither
      Let's call the whole thing off
      You like potato and I like potahto
      You like tomato and I like tomahto
      Potato, potahto, tomato, tomahto
      Let's call the whole thing off
      But, oh, if we call the whole thing off
      Then we must part
      And, oh, if we ever part, then that might break my heart
      So if you like pajamas and I like pajahmas
      I'll wear pajamas and give up pajahmas
      For we know we need each other so we
      Better call the whole thing off
      Let's call the whole thing off
      You say laughter and I say larfter
      You say after and I say arfter
      Laughter, larfter, after, arfter
      Let's call the whole thing off
      You like vanilla and I like vanella
      You sarsaparilla, and I sarsapirella
      Vanilla, vanella, chocolate, strawberry
      Let's call the whole thing off
      But, oh, if we call the whole thing off, then we must part
      And, oh, if we ever part, then that might break my heart
      So if you go for oysters and I go for ersters
      I'll order oysters and cancel the ersters
      For we know we need each other so we
      Better call the calling off off
      Let's call the whole thing off
      I say father, and you say pater
      I saw mother and you say mater
      Pater, mater, uncle, auntie
      Let's call the whole thing off
      I like bananas and you like banahnahs
      I say Havana and I get Havahnah
      Bananas, banahnahs, Havana, Havahnah
      Go your way, I'll go mine
      So if I go for scallops and you go for lobsters
      So, all right, no contest, we'll order lobseter
      For we know we need each other so we
      Better call the calling off off
      Let's call the whole thing off`
    },
    {
      id: 3, autor: 'Frank Sinatra',
      title: 'Fly Me To The Moon',
      cancion: 'Frank Sinatra Fly Me To The Moon.mp3',
      imagen: 'a_cover-04.jpg',
      lyrics: `Fly me to the moon
      Let me play among the stars
      Let me see what spring is like on
      A-Jupiter and Mars
      In other words, hold my hand
      In other words, baby, kiss me
      Fill my heart with song and let me sing for ever more
      You are all I long for
      All I worship and adore
      In other words, please be true
      In other words, I love you
      Fill my heart with song
      Let me sing for ever more
      You are all I long for, all I worship and adore
      In other words, please be true
      In other words
      In other words
      I love you Fly me to the moon
      Let me play among the stars
      Let me see what spring is like on
      A-Jupiter and Mars
      In other words, hold my hand
      In other words, baby, kiss me
      Fill my heart with song and let me sing for ever more
      You are all I long for
      All I worship and adore
      In other words, please be true
      In other words, I love you
      Fill my heart with song
      Let me sing for ever more
      You are all I long for, all I worship and adore
      In other words, please be true
      In other words
      In other words
      I love you
      Fly me to the moon
      Let me play among the stars
      Let me see what spring is like on
      A-Jupiter and Mars
      In other words, hold my hand
      In other words, baby, kiss me
      Fill my heart with song and let me sing for ever more
      You are all I long for
      All I worship and adore
      In other words, please be true
      In other words, I love you
      Fill my heart with song
      Let me sing for ever more
      You are all I long for, all I worship and adore
      In other words, please be true
      In other words
      In other words
      I love you Fly me to the moon
      Let me play among the stars
      Let me see what spring is like on
      A-Jupiter and Mars
      In other words, hold my hand
      In other words, baby, kiss me
      Fill my heart with song and let me sing for ever more
      You are all I long for
      All I worship and adore
      In other words, please be true
      In other words, I love you
      Fill my heart with song
      Let me sing for ever more
      You are all I long for, all I worship and adore
      In other words, please be true
      In other words
      In other words
      I love you`
    },
    {
      id: 4,
      autor: 'Guns N Roses',
      title: 'Don t Cry',
      cancion: 'Guns N Roses - Dont Cry.mp3',
      imagen: 'a_cover-05.jpg',
      lyrics: `If we could see tomorrow, what of your plans?
      No one can live in sorrow, ask all your friends
      Times that you took in stride, they're back in demand
      I was the one who was washing blood off your hands
      Don't you cry tonight
      I still love you, baby
      Don't you cry tonight
      Don't you cry tonight
      There's a heaven above you baby
      And don't you cry tonight
      I know the things you wanted, they're not what you have
      With all the people talking, it's driving you mad
      If I was standing by you, how would you feel
      Knowing your love's decided, and all love is real?
      Don't you cry tonight
      I still love you, baby
      Don't you cry tonight
      Don't you cry tonight
      There's a heaven above you baby
      And don't you cry tonight
      I thought I could live in your world
      As years all went by, with all the voices I've heard
      Something has died
      And when you're in need of someone, my heart won't deny you
      So many seem so lonely with no one left to cry to, baby
      Don't you cry tonight
      I still love you, baby
      Don't you cry tonight
      Don't you cry tonight
      There's a heaven above you baby
      And don't you cry tonight
      Don't you cry tonight
      I still love you, baby
      Don't you cry tonight
      Don't you cry tonight
      There's a heaven above you baby
      And don't you cry tonight.
      Don't you cry tonight
      I still love you, baby
      Don't you cry tonight
      Don't you cry tonight
      There's a heaven above you baby
      And don't you cry tonight
      I thought I could live in your world
      As years all went by, with all the voices I've heard
      Something has died
      And when you're in need of someone, my heart won't deny you
      So many seem so lonely with no one left to cry to, baby
      Don't you cry tonight
      I still love you, baby
      Don't you cry tonight
      Don't you cry tonight
      There's a heaven above you baby
      And don't you cry tonight
      Don't you cry tonight
      I still love you, baby
      Don't you cry tonight
      Don't you cry tonight
      There's a heaven above you baby
      And don't you cry tonight.   `
    },

    {
      id: 10,
      autor: 'Lenny Kravitz',
      title: 'PROXIMAMENTE ESTARÁ A TU DISPOSICION, DISCULPE LAS MOLESTIAS',
      cancion: 'No disponible temporalmente',
      imagen: 'a_cover-06.jpg'
    },

    {
      id: 11,
      autor: 'Antonio Carlos Jobim',
      title: 'PROXIMAMENTE ESTARÁ A TU DISPOSICION, DISCULPE LAS MOLESTIAS',
      cancion: 'No disponible temporalmente',
      imagen: 'a_cover-07.jpg'
    },
    {
      id: 12, 
      autor: 'HombresG',
      title: 'PROXIMAMENTE ESTARÁ A TU DISPOSICION, DISCULPE LAS MOLESTIAS',
      cancion: 'No disponible temporalmente',
      imagen: 'a_cover-08.jpg'
    },
    {
      id: 13,
      autor: 'Joao Gilberto',
      title: 'PROXIMAMENTE ESTARÁ A TU DISPOSICION, DISCULPE LAS MOLESTIAS',
      cancion: 'No disponible temporalmente',
      imagen: 'a_cover-09.jpg'
    }


  ]

 
  searchSong = ['Blur','Girls and Boys 1','Queen','Don t Stop Me Now', 'Ella F. and Louis Armstrong','Lets Call the Whole Thing Off', 'Frank Sinatra','Fly Me To The Moon','Guns N Roses','Don t Cry', 'Lenny Kravitz','Antonio Carlos Jobim','HombresG','Joao Gilberto']

  // constructor() { }

  songList1 = [
    {
      id: 0,
      autor: 'Blur',
      title: 'Girls and Boys 1',
      cancion: 'Blur (The Best Of) - Girls and Boys.mp3',
      imagen: 'a_cover-02.jpg',
      lyrics: `Street's like a jungle
     So call the police
     Following the herd
     Down to Greece
     On holiday
     Love in the nineties
     Is paranoid
     On sunny beaches
     Take your chances
     Looking for
     Girls who are boys
     Who like boys to be girls
     Who do boys like they're girls
     Who do girls like they're boys
     Always should be someone you really love
     Avoiding all work
     Because there's none available
     Like battery thinkers
     Count your thoughts
     On one-two-three-four-five fingers
     Nothing is wasted
     Only reproduced
     You get nasty blisters
     Du bist sehr schan
     But we haven't been introduced
     Girls who are boys
     Who like boys to be girls
     Who do boys like they're girls
     Who do girls like they're boys
     Always should be someone you really love
     Girls who are boys
     Who like boys to be girls
     Who do boys like they're girls
     Who do girls like they're boys
     Always should be someone to really love
     Looking for girls who are boys
     Who like boys to be girls
     Who do boys like they're girls
     Who do girls like they're boys
     Always should be someone you really love
     Girls who are boys
     Who like boys to be girls
     Who do boys like they're girls
     Who do girls like they're boys
     Always should be someone you really love
     Girls who are boys
     Who like boys to be girls
     Who do boys like they're girls
     Who do girls like they're boys
     Always should be someone you really love
     Girls who are boys
     Who like boys to be girls
     Who do boys like they're girls
     Who do girls like they're boys
     Always should be someone to really love`
    },

    {
      id: 1,
      autor: 'Queen',
      title: 'Don t Stop Me Now',
      cancion: 'Queen - Dont Stop Me Now.mp3',
      imagen: 'a_cover-01.jpg',
      lyrics: `Tonight, I'm gonna have myself a real good time
     I feel alive and the world I'll turn it inside out, yeah
     And floating around in ecstasy
     So don't stop me now don't stop me
     'Cause I'm having a good time, having a good time
     I'm a shooting star, leaping through the sky
     Like a tiger defying the laws of gravity
     I'm a racing car, passing by like Lady Godiva
     I'm gonna go, go, go
     There's no stopping me
     I'm burnin' through the sky, yeah
     Two hundred degrees
     That's why they call me Mister Fahrenheit
     I'm traveling at the speed of light
     I wanna make a supersonic man out of you
     Don't stop me now, I'm having such a good time
     I'm having a ball
     Don't stop me now
     If you wanna have a good time, just give me a call
     Don't stop me now ('cause I'm having a good time)
     Don't stop me now (yes, I'm havin' a good time)
     I don't want to stop at all
     Yeah, I'm a rocket ship on my way to Mars
     On a collision course
     I am a satellite, I'm out of control
     I am a sex machine, ready to reload
     Like an atom bomb about to
     Oh, oh, oh, oh, oh explode
     I'm burnin' through the sky, yeah
     Two hundred degrees
     That's why they call me Mister Fahrenheit
     I'm traveling at the speed of light
     I wanna make a supersonic woman of you
     Don't stop me, don't stop me
     Don't stop me, hey, hey, hey
     Don't stop me, don't stop me
     Ooh ooh ooh, I like it
     Don't stop me, don't stop me
     Have a good time, good time
     Don't stop me, don't stop me, ah
     Oh yeah
     Alright
     Oh, I'm burnin' through the sky, yeah
     Two hundred degrees
     That's why they call me Mister Fahrenheit
     I'm traveling at the speed of light
     I wanna make a supersonic man out of you
     Don't stop me now, I'm having such a good time
     I'm having a ball
     Don't stop me now
     If you wanna have a good time (wooh)
     Just give me a call (alright)
     Don't stop me now ('cause I'm having a good time, yeah yeah)
     Don't stop me now (yes, I'm havin' a good time)
     I don't want to stop at all
     La da da da daah
     Da da da haa
     Ha da da ha ha haaa
     Ha da daa ha da da aaa
     Ooh ooh ooh`
    },

    {
      id: 2,
      autor: 'Ella F. and Louis Armstrong',
      title: 'Lets Call the Whole Thing Off',
      cancion: 'Ella F. and Louis Armstrong - Lets Call the Whole Thing Off.mp3',
      imagen: 'a_cover-03.jpg',
      lyrics: `Things have come to a pretty pass
      Our romance is growing flat
      For you like this and the other
      While I go for this and that
      Goodness knows what the end will be
      Oh, I don't know where I'm at
      It looks as if we two will never be one
      Something must be done
      You say either and I say either
      You say neither and I say neither
      Either, either, neither, neither
      Let's call the whole thing off
      You like potato and I like potahto
      You like tomato and I like tomahto
      Potato, potahto, tomato, tomahto
      Let's call the whole thing off
      But, oh, if we call the whole thing off
      Then we must part
      And, oh, if we ever part, then that might break my heart
      So if you like pajamas and I like pajahmas
      I'll wear pajamas and give up pajahmas
      For we know we need each other so we
      Better call the whole thing off
      Let's call the whole thing off
      You say laughter and I say larfter
      You say after and I say arfter
      Laughter, larfter, after, arfter
      Let's call the whole thing off
      You like vanilla and I like vanella
      You sarsaparilla, and I sarsapirella
      Vanilla, vanella, chocolate, strawberry
      Let's call the whole thing off
      But, oh, if we call the whole thing off, then we must part
      And, oh, if we ever part, then that might break my heart
      So if you go for oysters and I go for ersters
      I'll order oysters and cancel the ersters
      For we know we need each other so we
      Better call the calling off off
      Let's call the whole thing off
      I say father, and you say pater
      I saw mother and you say mater
      Pater, mater, uncle, auntie
      Let's call the whole thing off
      I like bananas and you like banahnahs
      I say Havana and I get Havahnah
      Bananas, banahnahs, Havana, Havahnah
      Go your way, I'll go mine
      So if I go for scallops and you go for lobsters
      So, all right, no contest, we'll order lobseter
      For we know we need each other so we
      Better call the calling off off
      Let's call the whole thing off`
    },
    {
      id: 3, autor: 'Frank Sinatra',
      title: 'Fly Me To The Moon',
      cancion: 'Frank Sinatra Fly Me To The Moon.mp3',
      imagen: 'a_cover-04.jpg',
      lyrics: `Fly me to the moon
      Let me play among the stars
      Let me see what spring is like on
      A-Jupiter and Mars
      In other words, hold my hand
      In other words, baby, kiss me
      Fill my heart with song and let me sing for ever more
      You are all I long for
      All I worship and adore
      In other words, please be true
      In other words, I love you
      Fill my heart with song
      Let me sing for ever more
      You are all I long for, all I worship and adore
      In other words, please be true
      In other words
      In other words
      I love you Fly me to the moon
      Let me play among the stars
      Let me see what spring is like on
      A-Jupiter and Mars
      In other words, hold my hand
      In other words, baby, kiss me
      Fill my heart with song and let me sing for ever more
      You are all I long for
      All I worship and adore
      In other words, please be true
      In other words, I love you
      Fill my heart with song
      Let me sing for ever more
      You are all I long for, all I worship and adore
      In other words, please be true
      In other words
      In other words
      I love you
      Fly me to the moon
      Let me play among the stars
      Let me see what spring is like on
      A-Jupiter and Mars
      In other words, hold my hand
      In other words, baby, kiss me
      Fill my heart with song and let me sing for ever more
      You are all I long for
      All I worship and adore
      In other words, please be true
      In other words, I love you
      Fill my heart with song
      Let me sing for ever more
      You are all I long for, all I worship and adore
      In other words, please be true
      In other words
      In other words
      I love you Fly me to the moon
      Let me play among the stars
      Let me see what spring is like on
      A-Jupiter and Mars
      In other words, hold my hand
      In other words, baby, kiss me
      Fill my heart with song and let me sing for ever more
      You are all I long for
      All I worship and adore
      In other words, please be true
      In other words, I love you
      Fill my heart with song
      Let me sing for ever more
      You are all I long for, all I worship and adore
      In other words, please be true
      In other words
      In other words
      I love you`
    },
    {
      id: 4,
      autor: 'Guns N Roses',
      title: 'Don t Cry',
      cancion: 'Guns N Roses - Dont Cry.mp3',
      imagen: 'a_cover-05.jpg',
      lyrics: `If we could see tomorrow, what of your plans?
      No one can live in sorrow, ask all your friends
      Times that you took in stride, they're back in demand
      I was the one who was washing blood off your hands
      Don't you cry tonight
      I still love you, baby
      Don't you cry tonight
      Don't you cry tonight
      There's a heaven above you baby
      And don't you cry tonight
      I know the things you wanted, they're not what you have
      With all the people talking, it's driving you mad
      If I was standing by you, how would you feel
      Knowing your love's decided, and all love is real?
      Don't you cry tonight
      I still love you, baby
      Don't you cry tonight
      Don't you cry tonight
      There's a heaven above you baby
      And don't you cry tonight
      I thought I could live in your world
      As years all went by, with all the voices I've heard
      Something has died
      And when you're in need of someone, my heart won't deny you
      So many seem so lonely with no one left to cry to, baby
      Don't you cry tonight
      I still love you, baby
      Don't you cry tonight
      Don't you cry tonight
      There's a heaven above you baby
      And don't you cry tonight
      Don't you cry tonight
      I still love you, baby
      Don't you cry tonight
      Don't you cry tonight
      There's a heaven above you baby
      And don't you cry tonight.
      Don't you cry tonight
      I still love you, baby
      Don't you cry tonight
      Don't you cry tonight
      There's a heaven above you baby
      And don't you cry tonight
      I thought I could live in your world
      As years all went by, with all the voices I've heard
      Something has died
      And when you're in need of someone, my heart won't deny you
      So many seem so lonely with no one left to cry to, baby
      Don't you cry tonight
      I still love you, baby
      Don't you cry tonight
      Don't you cry tonight
      There's a heaven above you baby
      And don't you cry tonight
      Don't you cry tonight
      I still love you, baby
      Don't you cry tonight
      Don't you cry tonight
      There's a heaven above you baby
      And don't you cry tonight.   `
    },

    {
      id: 10,
      autor: 'Lenny Kravitz',
      title: 'PROXIMAMENTE ESTARÁ A TU DISPOSICION, DISCULPE LAS MOLESTIAS',
      cancion: 'No disponible temporalmente',
      imagen: 'a_cover-06.jpg'
    },

    {
      id: 11,
      autor: 'Antonio Carlos Jobim',
      title: 'PROXIMAMENTE ESTARÁ A TU DISPOSICION, DISCULPE LAS MOLESTIAS',
      cancion: 'No disponible temporalmente',
      imagen: 'a_cover-07.jpg'
    },
    {
      id: 12, 
      autor: 'HombresG',
      title: 'PROXIMAMENTE ESTARÁ A TU DISPOSICION, DISCULPE LAS MOLESTIAS',
      cancion: 'No disponible temporalmente',
      imagen: 'a_cover-08.jpg'
    },
    {
      id: 13,
      autor: 'Joao Gilberto',
      title: 'PROXIMAMENTE ESTARÁ A TU DISPOSICION, DISCULPE LAS MOLESTIAS',
      cancion: 'No disponible temporalmente',
      imagen: 'a_cover-09.jpg'
    }


  ]

  listaCanciones = this.songList1;
  ListaFavoritas = []

  addFavoritas(item: string): void {
    this.ListaFavoritas.push(item);
    console.log(this.ListaFavoritas);
  }

  deleteFav(posicion: number): void {
    this.listaCanciones.splice(posicion, 1);
  }









}
