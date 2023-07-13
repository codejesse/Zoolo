"use client"
import { CarProps } from '@/types';
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';

interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                    >
                        <div className='fixed inset-0 bg-black bg-opacity-25' />
                    </Transition.Child>
                </Dialog>
            </Transition>
        </>
    )
}

export default CarDetails