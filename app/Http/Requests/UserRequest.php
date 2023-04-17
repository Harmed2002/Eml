<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
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
            'name' => 'required|string|max:60',
            'lastname' => 'required|string|max:60',
            'phone' => 'numeric|nullable|max:999999999999',
            'email' =>  ($this->getMethod() == 'POST') ? 'required|string|email|max:255|unique:users' : 'required|string|email|max:255|unique:users,email,'.$this->user->id,
            'password' => 'required|string|min:8|confirmed',
        ];
    }
}
