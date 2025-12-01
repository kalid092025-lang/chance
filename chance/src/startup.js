import Chance from 'chance';
import { en, Faker } from '@faker-js/faker';

function choose(array){
    var index = Math.floor(Math.random() * array.length);
    return array[index];
}
 
export function Generetestartup() {

    const faker = new Faker({ locale: [en] });

   const sector = choose(['AI', 'Blockchain', 'Cybersecurity', 'Fintech', 'Healthtech', 'Edtech', 'E-commerce', 'SaaS', 'IoT', 'AR/VR']);
    const product = choose(['platform', 'app', 'service', 'solution', 'tool', 'marketplace', 'network', 'ecosystem', 'framework', 'infrastructure']);
    const businessModel = choose(['subscription-based', 'freemium', 'ad-supported', 'transactional', 'licensing', 'data monetization', 'affiliate marketing', 'crowdsourcing', 'white-labeling', 'partnerships']);
    const targetAudience = choose(['consumers', 'small businesses', 'enterprises', 'developers', 'healthcare providers', 'educational institutions', 'financial institutions', 'retailers', 'manufacturers', 'government agencies']);
     return {
        name: `${faker.company.buzzNoun(en)} ${sector} labs`,
        description: `A ${businessModel} ${product} for ${targetAudience} in the ${sector} sector.`,
        founder: faker.person.fullName(en),
        foundedYear: faker.date.past({ years: 10 }).getFullYear(),
        location: `${faker.location.city()}, ${faker.location.country()}`,
        website: `www.${faker.internet.domainWord(en)}${sector.toLowerCase()}.com`,
        tagline: `${faker.company.catchPhrase(en)}`,
        avatar: faker.image.avatar()
    };
     }