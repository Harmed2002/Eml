<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PermissionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' =>  ($this->getMethod() == 'POST') ? 'required|string|max:255|unique:permissions' : 'required|string|max:255|unique:permissions,name,'.$this->permission->id,
        ];
    }
}
