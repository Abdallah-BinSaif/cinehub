import SubscriptionCard from "./SubscriptionCard.jsx";
import SectionHeading from "../../../components/SectionHeading.jsx";

const Subscription = () => {
    const plans = [
        {
            name: 'Free',
            price: 'Free',
            duration: '',
            features: [
                'Limited access',
                'Basic features',
                'Ad-supported',
                'Standard quality'
            ],
            buttonText: 'Get Started'
        },
        {
            name: 'Monthly',
            price: '9.99',
            duration: 'month',
            features: [
                'Full access',
                'All features',
                'Ad-free experience',
                'HD quality',
                'Monthly billing'
            ],
            buttonText: 'Choose Monthly'
        },
        {
            name: 'Yearly',
            price: '99.99',
            duration: 'year',
            features: [
                'Full access',
                'All features',
                'Ad-free experience',
                'HD quality',
                'Save 15% (compared to monthly)',
                'Annual billing'
            ],
            buttonText: 'Choose Yearly'
        }
    ];

    return (
        <section className="screen">
            <div className="text-center">
                <SectionHeading heading={"Choose Your Plan"}/>

                <div className="flex flex-col md:flex-row justify-center items-center md:items-start mx-4">
                    {plans.map(plan => (
                        <SubscriptionCard key={plan.name} plan={plan} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Subscription;
