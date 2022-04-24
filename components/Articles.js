import React from 'react'

const Articles = () => {
    return (
        <>
            <section className='row justify-content-center' style={{ marginTop: 150 }}>
                <div className='col-12'>
                    <p className='text-center fs-25'>What is <span className='highlight'>StockMaster</span>?</p>
                </div>
                <article className='col-6'>
                    <p className='text-center'>
                        This website offers you <span className='highlight'>unlimited</span> storage for your products of any kind.
                    </p>
                    <p className='text-center'>
                        Your products are stored in a remote <span className='highlight'>database</span> so you can access to them without the risk of losing it, just with have internet connection.
                    </p>
                </article>
            </section>
            <div className="container">
                <section className='row justify-content-center' style={{ marginTop: 100 }}>
                    <div className='col-12'>
                        <p className='text-center fs-25'>Why <span className='highlight'>choose</span> us?</p>
                    </div>
                    <section className='row py-4'>
                        <article className='col-md-4'>
                            <div className="crdart">
                                <p className='fs-5'><span className="fw-bold">1. </span><span className='highlight'>Custom</span> properties for your tables</p>
                                <p>
                                    You can create the table what you wish.<br />
                                    String flieds, only one character field, numbers, long text, etc.
                                </p>
                            </div>
                        </article>
                        <article className='col-md-4'>
                            <div className="crdart">
                                <p className='fs-5'><span className='fw-bold'>2. </span><span className='highlight'>Unlimited</span> storage for your products</p>
                                <p>
                                    You can storage unlimited quantity of information in one table!<br />
                                    To have more than one table you can check our <a className='highlight link'>pricing</a>.
                                </p>
                            </div>
                        </article>
                        <article className='col-md-4'>
                            <div className="crdart">
                                <p className='fs-5'><span className='fw-bold'>3. </span>Take<span className='highlight'> control</span> of your products.</p>
                                <p>
                                    You can <span className="highlight">edit</span>, <span className="highlight">delete</span>, <span className="highlight">add</span> and <span className="highlight">modify</span> your products.<br />
                                    That is instantanious and easy to do.
                                </p>
                            </div>
                        </article>
                    </section>
                </section>
            </div>
        </>
    )
}

export default Articles;