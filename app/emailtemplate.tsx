import * as React from 'react';

interface Meal {
  desayuno: string[];
  almuerzo: string[];
  merienda: string[];
  cena: string[];
}

interface PlanDay {
  [key: string]: Meal;
}

interface EmailTemplateProps {
  userProfile: any;
  body?: any;
  plan:{
    [key: string]: PlanDay | string[];
  }
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  body,
  userProfile,
  plan
}) => (
  <div>
    <h1>Plan nutricional de 7 días!</h1>
    <h3>Perfil</h3>
    <p>Edad {userProfile.age} años</p>
    <p>Peso {userProfile.weight} libras</p>
    <p>Meta de Peso {userProfile.weight_goal} libras</p>

 
    <div>
      {Object.keys(plan).map((dayKey, index) => {
        const day = plan[dayKey] as PlanDay;
        return (
          <div key={index}>
            <h2>{dayKey}</h2>
            {Object.keys(day).map((mealKey) => {
              const meal = day[mealKey] as unknown as string[];
              return (
                <div key={mealKey}>
                  <h3>{mealKey}</h3>
                  <ul>
                    {meal.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        );
      })}
      <h2>Recomendaciones</h2>
      {/* <ul>
        {plan.recomendaciones.map((recomendacion, index) => (
          <li key={index}>{recomendacion}</li>
        ))}
      </ul> */}
    </div>

  </div>
);