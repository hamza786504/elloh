import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <footer class="py-5">
                <div class="container py-3 my-4">
                    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                        <li class="nav-item"><a href="/" class="nav-link px-2 text-capitalize text-body-secondary">Home</a></li>
                        <li class="nav-item"><a href="/" class="nav-link px-2 text-capitalize text-body-secondary">Features</a></li>
                        <li class="nav-item"><a href="/" class="nav-link px-2 text-capitalize text-body-secondary">How it works</a></li>
                        <li class="nav-item"><a href="/" class="nav-link px-2 text-capitalize text-body-secondary">About Us</a></li>
                        <li class="nav-item"><a href="/" class="nav-link px-2 text-capitalize text-body-secondary">Contact</a></li>
                    </ul>
                    <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
                        <p className="col-12 col-md-6 text-center text-body-secondary mb-3 mb-md-0">
                            <span className='text-secondary fw-bold'>Email:</span> <Link to="mailto:info@elloh.com" className='text-secondary'>info@elloh.com</Link>
                        </p>
                        <p className="col-12 col-md-6 text-center text-body-secondary">
                            <span className='text-secondary fw-bold'>Phone:</span> <Link to="tel:+1234567890" className='text-secondary'>(123) 456-7890</Link>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
