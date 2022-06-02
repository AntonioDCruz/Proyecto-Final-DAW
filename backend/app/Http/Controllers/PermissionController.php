<?php

namespace App\Http\Controllers;

use App\Models\Permission;
use Illuminate\Http\Request;

class PermissionController extends Controller
{
    public function index(){
        return Permission::all();
    }

    public function roles(){
        return $this->belongsToMany(Role::class, 'role_permissions');
    }
}
