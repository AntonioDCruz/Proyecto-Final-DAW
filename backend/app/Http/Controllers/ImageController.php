<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ImageUploadRequest;
use Illuminate\Support\Str;

class ImageController extends Controller
{
    public function upload(ImageUploadRequest $request){
        $file = $request->file('image');
        $name = Str::random(10);
        $url =  \Storage::putFileAs('images', $file, $name . '.' . $file->extension());

        return [
            'url' => 'http://164.92.158.170:8088' . '/' . $url
        ];
    }
}
