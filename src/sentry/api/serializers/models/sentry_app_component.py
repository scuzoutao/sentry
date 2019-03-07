from __future__ import absolute_import

import six

from sentry.api.serializers import Serializer, register
from sentry.models import SentryAppComponent


@register(SentryAppComponent)
class SentryAppComponentSerializer(Serializer):
    def serialize(self, obj, attrs, user):
        return {
            'uuid': six.binary_type(obj.uuid),
            'type': obj.type,
            'schema': obj.schema,
            'sentryApp': {
                'slug': obj.sentry_app.slug,
                'name': obj.sentry_app.name,
            }
        }
