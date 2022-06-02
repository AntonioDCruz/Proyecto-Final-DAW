<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        VerifyEmail::tomailUsing(function ($notifiable, $url){
            $frontUrl = "http://localhost:4200?email_verify_url=".$url;

            return (new MailMessage)
                ->subject('Verify Email Address')
                ->line('Click the button below to verify your email address')
                ->action('Verify Email Address', $frontUrl);
        });
        //
    }
}
