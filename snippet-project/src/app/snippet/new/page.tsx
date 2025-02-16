import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const CreateNewSnippet = () => {
  return (
    <form>
        <div>
            <Label>Title</Label>
            <Input type='text' name='title' id='title' placeholder='Enter title' />
        </div>
        <div>
            <Label>Code</Label>
            <Textarea name='codearea' id='codearea' />
        </div>
        <Button type='submit' className='my-5'>Create Snippet</Button>
    </form>
  )
}

export default CreateNewSnippet