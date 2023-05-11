"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminGuards = void 0;
class AdminGuards {
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        if (!request.currentUser) {
            return false;
        }
        return request.currentUser.isAdmin;
    }
}
exports.AdminGuards = AdminGuards;
//# sourceMappingURL=admin.guards.js.map