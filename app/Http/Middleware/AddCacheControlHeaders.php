<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;


class AddCacheControlHeaders
{
    public function handle($request, Closure $next)
    {
        $response = $next($request);

        // Set Cache-Control headers for static assets
        if ($request->is('css/*') || $request->is('js/*') || $request->is('images/*')) {
            $response->header('Cache-Control', 'public, max-age=31536000'); // Adjust max-age as needed
        }

        return $response;
    }
}

