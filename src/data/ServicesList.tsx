export interface Service {
    id: string;
    title: string;
    description: string;
}

export const ServicesList: Service[] = [
    {
        id: 'photography',
        title: 'Photography',
        description: 'We offer professional photography services to help you capture the perfect image for your product. From pre-production planning to shooting, to post-production editing and retouching, we ensure that every shot is perfect for your intended use.'
    },
    {
        id: 'videography',
        title: 'Videography',
        description: 'Having quality video content is important for your business, whether it\'s a simple how-to video or a more impactful piece for social media. That\'s why we offer comprehensive services from beginning to end, including storywriting, styling, filming, and post-production.'
    },
    {
        id: 'set-design',
        title: 'Set Design',
        description: 'We create stunning sets using the latest techniques and technology. Whether you need a traditional set, digital elements, or 3D printed materials, we\'ve got you covered.'
    }
];