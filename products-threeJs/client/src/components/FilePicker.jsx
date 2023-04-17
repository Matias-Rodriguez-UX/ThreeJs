import React from 'react'
import CustomButton from './CustomButton'
import { useSnapshot } from 'valtio'

import state from '../store'

const FilePicker = ({ file, setFile, readFile }) => {
    const snap = useSnapshot(state)
    return (
        <div className='filepicker-container'>
            <div className='flex-1 fles flex-col'>
                <input type="file" id='file-upload'
                    accept='image/*'
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <label htmlFor="file-upload" className='filepicker-label'>Upload File</label>
                <p className='mt-2 text-gray-500 text-xs truncate'>
                    {file === '' ? ' No file selected' : file.name}
                </p>
            </div>
            <div className='mt-4 flex flex-wrap gap-3 font-bold'>
                <CustomButton
                    type='outline'
                    title={'Logo'}
                    handleClick={() => readFile('logo')}
                    customStyle={'text-xs'}
                />
                <CustomButton
                    type='filled'
                    title={'Full'}
                    handleClick={() => readFile('full')}
                    customStyle={'text-xs font-bold'}
                />
            </div>
        </div>
    )
}

export default FilePicker