export interface Memory {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
}

export const memories: Memory[] = [
  {
    id: 1,
    title: "Our First Date 💕",
    description: "The moment I knew you were special. Your laugh, your smile, the way you made everything feel magical. I'm so grateful for that perfect evening that started our beautiful journey.",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 2,
    title: "Beach Day Adventure 🌊",
    description: "Building sandcastles, splashing in the waves, and watching the sunset paint the sky. Your hand in mine, the perfect day that felt like a fairytale.",
    date: "April 2, 2024",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 3,
    title: "Cozy Movie Nights 🎬",
    description: "Cuddled up under soft blankets, sharing popcorn and stealing kisses during the boring parts. These quiet moments together are when I feel most at home.",
    date: "May 20, 2024",
    image: "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
  }
];
