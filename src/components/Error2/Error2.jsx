import React from 'react'

function Error2() {
    window.scrollTo(0, 0);
    document.title=`Wasifati`;
  return (
    <div className='error error2'>
        <div className="overlay"></div>
        <header className='header'>
            <div className="container">

                <div className="alert alert-danger" role="alert">
                    <ul className='errorList'>
                        <li className='errorPoint'>
                            <p>
    نأسف عن الخلل الذي ظهر، حيث تم حجب بعض الوصفات بناءً على احتوائها على مكونات ممنوعة وفقًا لتعاليم ديننا الإسلامي</p>
                        </li>
                        <li className='errorPoint'>
                            <p>نحن في الوقت الحالي نعمل على إجراء التعديلات الضرورية لحل هذا الأمر وضمان استمرار جودة المحتوى</p>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Error2